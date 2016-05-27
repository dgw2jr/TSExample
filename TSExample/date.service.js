var DateServices;
(function (DateServices) {
    var DateService = (function () {
        function DateService(behavior) {
            this.localDateFormat = behavior.formatter.displayString;
            this.pattern = behavior.parser.pattern;
            this.formatKey = behavior.parser.key;
            this.format = behavior.formatter.format;
        }
        DateService.prototype.withServiceBehavior = function (behavior) {
            return new DateService(behavior);
        };
        DateService.prototype.formatShortDate = function (date) {
            var shortDate;
            try {
                shortDate = this.getParsedShortDateFromString(date);
            }
            catch (ex) {
                return date;
            }
            return this.format(shortDate);
        };
        DateService.prototype.isValidShortDate = function (date) {
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
        };
        DateService.prototype.zeroPad = function (num) {
            return ("0" + num).slice(-2);
        };
        DateService.prototype.getShortDateFromDate = function (date) {
            var month = this.zeroPad(date.getMonth() + 1);
            var day = this.zeroPad(date.getDate());
            var year = date.getFullYear().toString();
            return { month: month, day: day, year: year };
        };
        DateService.prototype.getArrayFromString = function (str) {
            return str.match(this.pattern);
        };
        DateService.prototype.getParsedShortDateFromString = function (date) {
            var matches = this.getArrayFromString(date);
            if (!matches) {
                throw Error('Input string is not a valid date');
            }
            var dateObj = this.getDateFromArray(matches);
            return this.getShortDateFromDate(dateObj);
        };
        DateService.prototype.getShortDateFromString = function (date) {
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
        };
        DateService.prototype.getDateFromArray = function (arr) {
            if (!arr) {
                return undefined;
            }
            var dateObj = {
                month: arr[this.formatKey.month],
                day: arr[this.formatKey.day],
                year: arr[this.formatKey.year]
            };
            return new Date(dateObj.month + "/" + dateObj.day + "/" + dateObj.year);
        };
        DateService.prototype.normalizeDateString = function (date) {
            return date.replace(/[-]/g, '/');
        };
        return DateService;
    }());
    DateServices.DateService = DateService;
})(DateServices || (DateServices = {}));
var DateFormatters;
(function (DateFormatters) {
    var CanadianFormatter = (function () {
        function CanadianFormatter() {
            this.displayString = 'yyyy-MM-dd';
        }
        CanadianFormatter.prototype.format = function (date) {
            return date.year + "-" + date.month + "-" + date.day;
        };
        return CanadianFormatter;
    }());
    DateFormatters.CanadianFormatter = CanadianFormatter;
    var UsFormatter = (function () {
        function UsFormatter() {
            this.displayString = 'MM/dd/yyyy';
        }
        UsFormatter.prototype.format = function (date) {
            return date.month + "/" + date.day + "/" + date.year;
        };
        return UsFormatter;
    }());
    DateFormatters.UsFormatter = UsFormatter;
})(DateFormatters || (DateFormatters = {}));
var DateParsers;
(function (DateParsers) {
    var CanadianParser = (function () {
        function CanadianParser() {
            this.pattern = /^([0-9][0-9]|1[8-9][0-9][0-9]|20[0-9][0-9])(?:[\/-]?)(0?[1-9]|1[1-2])(?:[\/-]?)(0?[1-9]|[1-2][0-9]|3[0-1])$/;
            this.key = { year: 1, month: 2, day: 3 };
        }
        return CanadianParser;
    }());
    DateParsers.CanadianParser = CanadianParser;
    var UsParser = (function () {
        function UsParser() {
            this.pattern = /^(0?[1-9]|1[1-2])(?:[\/-]?)(0?[1-9]|[1-2][0-9]|3[0-1])(?:[\/-]?)([0-9][0-9]|1[8-9][0-9][0-9]|20[0-9][0-9])$/;
            this.key = { year: 3, month: 1, day: 2 };
        }
        return UsParser;
    }());
    DateParsers.UsParser = UsParser;
})(DateParsers || (DateParsers = {}));
var DateServiceBehaviors;
(function (DateServiceBehaviors) {
    var DateServiceBehavior = (function () {
        function DateServiceBehavior(formatter, parser) {
            this.formatter = formatter;
            this.parser = parser;
        }
        DateServiceBehavior.prototype.withFormatter = function (formatter) {
            return new DateServiceBehavior(formatter, this.parser);
        };
        DateServiceBehavior.prototype.withParser = function (parser) {
            return new DateServiceBehavior(this.formatter, parser);
        };
        return DateServiceBehavior;
    }());
    DateServiceBehaviors.DateServiceBehavior = DateServiceBehavior;
})(DateServiceBehaviors || (DateServiceBehaviors = {}));
var DateServiceFactories;
(function (DateServiceFactories) {
    var DateService = DateServices.DateService;
    var DateServiceFactory = (function () {
        function DateServiceFactory(behaviorFactory) {
            this.behaviorFactory = behaviorFactory;
        }
        Object.defineProperty(DateServiceFactory.prototype, "instance", {
            get: function () {
                return new DateService(this.behaviorFactory.instance);
            },
            enumerable: true,
            configurable: true
        });
        ;
        return DateServiceFactory;
    }());
    DateServiceFactories.DateServiceFactory = DateServiceFactory;
    var DateServiceBehaviorFactory = (function () {
        function DateServiceBehaviorFactory(formatterFactory, parserFactory) {
            this.formatterFactory = formatterFactory;
            this.parserFactory = parserFactory;
        }
        Object.defineProperty(DateServiceBehaviorFactory.prototype, "instance", {
            get: function () {
                return new DateServiceBehaviors.DateServiceBehavior(this.formatterFactory.instance, this.parserFactory.instance);
            },
            enumerable: true,
            configurable: true
        });
        return DateServiceBehaviorFactory;
    }());
    DateServiceFactories.DateServiceBehaviorFactory = DateServiceBehaviorFactory;
    var DateParseBehaviorFactory = (function () {
        function DateParseBehaviorFactory($locale) {
            this.$locale = $locale;
            this.parsers = {
                'en-us': new DateParsers.UsParser(),
                'en-ca': new DateParsers.CanadianParser(),
                'fr-ca': new DateParsers.CanadianParser()
            };
        }
        Object.defineProperty(DateParseBehaviorFactory.prototype, "instance", {
            get: function () {
                return this.parsers[this.$locale.id];
            },
            enumerable: true,
            configurable: true
        });
        return DateParseBehaviorFactory;
    }());
    DateServiceFactories.DateParseBehaviorFactory = DateParseBehaviorFactory;
    var DateFormatBehaviorFactory = (function () {
        function DateFormatBehaviorFactory($locale, featureFlagService) {
            this.$locale = $locale;
            this.featureFlagService = featureFlagService;
            this.formatters = {
                'en-us': new DateFormatters.UsFormatter(),
                'en-ca': new DateFormatters.CanadianFormatter(),
                'fr-ca': new DateFormatters.CanadianFormatter()
            };
        }
        Object.defineProperty(DateFormatBehaviorFactory.prototype, "instance", {
            get: function () {
                if (this.featureFlagService.isEnabled('Use US formatter')) {
                    return this.formatters['en-us'];
                }
                return this.formatters[this.$locale.id];
            },
            enumerable: true,
            configurable: true
        });
        return DateFormatBehaviorFactory;
    }());
    DateServiceFactories.DateFormatBehaviorFactory = DateFormatBehaviorFactory;
})(DateServiceFactories || (DateServiceFactories = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFQSxJQUFPLFlBQVksQ0FpSGxCO0FBakhELFdBQU8sWUFBWSxFQUFDLENBQUM7SUFNakI7UUFLSSxxQkFBWSxRQUF5QjtZQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7UUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsUUFBeUI7WUFDekMsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFJRCxxQ0FBZSxHQUFmLFVBQWdCLElBQVk7WUFDeEIsSUFBSSxTQUFvQixDQUFDO1lBQ3pCLElBQUksQ0FBQztnQkFDRCxTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hELENBQUU7WUFBQSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtZQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFD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