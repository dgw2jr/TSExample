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
//# sourceMappingURL=date.service.js.map