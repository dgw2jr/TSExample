module FeatureFlags {
    export interface IFeatureFlagService {
        isEnabled(flag: string): boolean;
        //toggle(flag: string): void;
    }
}

module DateServiceInterfaces {
    export interface IDateFormatBehavior {
        format: (date: IShortDate) => string;
        displayString: string;
    }

    export interface IDateParseBehavior {
        key: IDateFormatKey;
        pattern: RegExp;
    }

    export interface IDateServiceBehavior {
        formatter: IDateFormatBehavior;
        parser: IDateParseBehavior;
        withFormatter(formatter: IDateFormatBehavior): IDateServiceBehavior;
        withParser(parser: IDateParseBehavior): IDateServiceBehavior;
    }
    
    export interface IDateService {
        localDateFormat: string;
        formatShortDate(date: string): string;
        isValidShortDate(date: string): boolean;
        withServiceBehavior(behavior: IDateServiceBehavior): IDateService;
    }

    export interface ILocaleProvider {
        id: string;
    }

    export interface IShortDate {
        month: string;
        day: string;
        year: string;
    }

    export interface IDateFormatKey {
        year: number;
        month: number;
        day: number;
    }

    export interface IDateServiceFactory {
        instance: IDateService;
    }

    export interface IDateServiceBehaviorFactory {
        instance: IDateServiceBehavior;
    }

    export interface IDateParseBehaviorFactory {
        instance: IDateParseBehavior;
    }

    export interface IDateFormatBehaviorFactory {
        instance: IDateFormatBehavior;
    }
}

module DateServices {
    import Service = DateServiceInterfaces.IDateService;
    import DateFormatKey = DateServiceInterfaces.IDateFormatKey;
    import ShortDate = DateServiceInterfaces.IShortDate;
    import ServiceBehavior = DateServiceInterfaces.IDateServiceBehavior;

    export class DateService implements Service {
        private pattern: RegExp;
        private formatKey: DateFormatKey;
        private format: (shortDate: ShortDate) => string;

        constructor(behavior: ServiceBehavior) {
            this.localDateFormat = behavior.formatter.displayString;
            this.pattern = behavior.parser.pattern;
            this.formatKey = behavior.parser.key;
            this.format = behavior.formatter.format;
        }

        withServiceBehavior(behavior: ServiceBehavior) {
            return new DateService(behavior);
        }

        localDateFormat: string;

        formatShortDate(date: string): string {
            var shortDate: ShortDate;
            try {
                shortDate = this.getParsedShortDateFromString(date);
            } catch (ex) {
                return date;
            }

            return this.format(shortDate);
        }

        isValidShortDate(date: string): boolean {
            var dateArr = this.getArrayFromString(date);
            if (!dateArr) {
                return false;
            }

            var shortDate = this.getShortDateFromString(date);
            var day = shortDate.day;

            var formatted = this.normalizeDateString(this.formatShortDate(date));

            var dateObj = new Date(formatted);
            if (dateObj.getDate() !== parseInt(day)) {
                return false;
            }

            return true;
        }

        private zeroPad(num: number): string {
            return `0${num}`.slice(-2);
        }

        private getShortDateFromDate(date: Date): ShortDate {
            var month = this.zeroPad(date.getMonth() + 1);
            var day = this.zeroPad(date.getDate());
            var year = date.getFullYear().toString();

            return <ShortDate>{ month, day, year };
        }

        private getArrayFromString(str: string): string[] {
            return str.match(this.pattern);
        }

        private getParsedShortDateFromString(date: string): ShortDate {
            var matches = this.getArrayFromString(date);
            if (!matches) {
                throw Error('Input string is not a valid date');
            }

            var dateObj = this.getDateFromArray(matches);
            return this.getShortDateFromDate(dateObj);
        }

        private getShortDateFromString(date: string): ShortDate {
            var matches = this.getArrayFromString(date);
            if (!matches) {
                throw Error('Input string is not a valid date');
            }

            var shortDate = {
                month: matches[this.formatKey.month],
                day: matches[this.formatKey.day],
                year: matches[this.formatKey.year]
            };

            return shortDate;
        }

        private getDateFromArray(arr: any[]): Date {
            if (!arr) {
                return undefined;
            }

            var dateObj = {
                month: arr[this.formatKey.month],
                day: arr[this.formatKey.day],
                year: arr[this.formatKey.year]
            };

            return new Date(`${dateObj.month}/${dateObj.day}/${dateObj.year}`);
        }

        private normalizeDateString(date: string) {
            return date.replace(/[-]/g, '/');
        }
    }
}

module DateFormatters {
    import DateFormatBehavior = DateServiceInterfaces.IDateFormatBehavior;
    import ShortDate = DateServiceInterfaces.IShortDate;

    export class CanadianFormatter implements DateFormatBehavior {
        displayString = 'yyyy-MM-dd';

        format(date: ShortDate): string {
            return `${date.year}-${date.month}-${date.day}`;
        }
    }

    export class UsFormatter implements DateFormatBehavior {
        displayString = 'MM/dd/yyyy';

        format(date: ShortDate): string {
            return `${date.month}/${date.day}/${date.year}`;
        }
    }
}

module DateParsers {
    import DateFormatKey = DateServiceInterfaces.IDateFormatKey;

    export class CanadianParser implements DateServiceInterfaces.IDateParseBehavior {
        pattern = /^([0-9][0-9]|1[8-9][0-9][0-9]|20[0-9][0-9])(?:[\/-]?)(0?[1-9]|1[1-2])(?:[\/-]?)(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        key: DateFormatKey = { year: 1, month: 2, day: 3 };
    }

    export class UsParser implements DateServiceInterfaces.IDateParseBehavior {
        pattern = /^(0?[1-9]|1[1-2])(?:[\/-]?)(0?[1-9]|[1-2][0-9]|3[0-1])(?:[\/-]?)([0-9][0-9]|1[8-9][0-9][0-9]|20[0-9][0-9])$/;
        key: DateFormatKey = { year: 3, month: 1, day: 2 };
    }
}

module DateServiceBehaviors {
    import ServiceBehavior = DateServiceInterfaces.IDateServiceBehavior;
    import DateFormatBehavior = DateServiceInterfaces.IDateFormatBehavior;
    import DateParseBehavior = DateServiceInterfaces.IDateParseBehavior;

    export class DateServiceBehavior implements ServiceBehavior {
        constructor(public formatter: DateFormatBehavior, public parser: DateParseBehavior) { }

        withFormatter(formatter: DateFormatBehavior) {
            return new DateServiceBehavior(formatter, this.parser);
        }

        withParser(parser: DateParseBehavior) {
            return new DateServiceBehavior(this.formatter, parser);
        }
    }
}

module DateServiceFactories {
    import ServiceFactory = DateServiceInterfaces.IDateServiceFactory;
    import LocaleProvider = DateServiceInterfaces.ILocaleProvider;
    import DateService = DateServices.DateService;
    import ParseBehaviorFactory = DateServiceInterfaces.IDateParseBehaviorFactory;
    import FormatBehaviorFactory = DateServiceInterfaces.IDateFormatBehaviorFactory;

    interface IDictionary<T> {
        [id: string]: T;
    }

    export class DateServiceFactory implements ServiceFactory {
        constructor(private behaviorFactory: DateServiceInterfaces.IDateServiceBehaviorFactory) { }

        get instance(): DateServiceInterfaces.IDateService {
            return new DateService(this.behaviorFactory.instance);
        };
    }
    
    export class DateServiceBehaviorFactory implements DateServiceInterfaces.IDateServiceBehaviorFactory {
        constructor(private formatterFactory: DateServiceInterfaces.IDateFormatBehaviorFactory, private parserFactory: DateServiceInterfaces.IDateParseBehaviorFactory) { }

        get instance(): DateServiceInterfaces.IDateServiceBehavior {
            return new DateServiceBehaviors.DateServiceBehavior(this.formatterFactory.instance, this.parserFactory.instance);
        }
    }

    export class DateParseBehaviorFactory implements ParseBehaviorFactory {
        private parsers: IDictionary<DateServiceInterfaces.IDateParseBehavior> = {
            'en-us': new DateParsers.UsParser(),
            'en-ca': new DateParsers.CanadianParser(),
            'fr-ca': new DateParsers.CanadianParser()
        };

        constructor(private $locale: LocaleProvider) { }

        get instance(): DateServiceInterfaces.IDateParseBehavior {
            return this.parsers[this.$locale.id];
        }
    }

    export class DateFormatBehaviorFactory implements FormatBehaviorFactory {
        private formatters: IDictionary<DateServiceInterfaces.IDateFormatBehavior> = {
            'en-us': new DateFormatters.UsFormatter(),
            'en-ca': new DateFormatters.CanadianFormatter(),
            'fr-ca': new DateFormatters.CanadianFormatter()
        };

        constructor(private $locale: LocaleProvider, private featureFlagService: FeatureFlags.IFeatureFlagService) {}

        get instance(): DateServiceInterfaces.IDateFormatBehavior {
            if (this.featureFlagService.isEnabled('Use US formatter')) {
                return this.formatters['en-us'];
            }

            return this.formatters[this.$locale.id];
        }
    }
}