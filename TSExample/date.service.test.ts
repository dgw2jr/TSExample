/// <reference path="date.service.ts"/>
'use strict';
import DateService = DateServices.DateService;

describe('Date Service', () => {
    describe('with default behavior', () => {
        describe('with overridden format behavior', () => {
            var service: DateServiceInterfaces.IDateService;
            var initialServiceBehavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.CanadianParser());
            var newFormatter = new DateFormatters.UsFormatter();

            beforeEach(() => {
                service = new DateService(initialServiceBehavior);
            });

            it('should have the override behavior', () => {
                var overriddenService = service.withServiceBehavior(initialServiceBehavior.withFormatter(newFormatter));
                var result = overriddenService.formatShortDate('1980-12-01');
                expect(result).toBe('12/01/1980');
            });
        });

        describe('with overridden parse behavior', () => {
            var service: DateServiceInterfaces.IDateService;
            var initialServiceBehavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.CanadianParser());
            var newParser = new DateParsers.UsParser();

            beforeEach(() => {
                service = new DateService(initialServiceBehavior);
            });

            it('should have the override behavior', () => {
                var overriddenService = service.withServiceBehavior(initialServiceBehavior.withParser(newParser));
                var result = overriddenService.formatShortDate('12/01/1980');
                expect(result).toBe('1980-12-01');
            });
        });

        describe('with overridden service behavior', () => {
            var service: DateServiceInterfaces.IDateService;
            var initialBehavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.CanadianParser());
            var newBehavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.UsParser());

            beforeEach(() => {
                service = new DateService(initialBehavior);
            });

            it('should have the override behavior', () => {
                var overriddenService = service.withServiceBehavior(newBehavior);
                var result = overriddenService.formatShortDate('12/01/1980');
                expect(result).toBe('1980-12-01');
            });
        });
    });

    describe('with US Behavior', () => {
        var service: DateServiceInterfaces.IDateService;
        var behavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.UsFormatter(), new DateParsers.UsParser());

        beforeEach(() => {
            service = new DateService(behavior);
        });

        describe('localDateFormat', () => {
            it('should return MM/dd/yyyy', () => {
                var result = service.localDateFormat;
                expect(result).toBe('MM/dd/yyyy');
            });
        });

        describe('formatShortDate', () => {
            describe('given input does not have separators', () => {
                it('should return MM/dd/yyyy from Mdyyyy', () => {
                    var date = '111980';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('01/01/1980');
                });

                it('should return MM/dd/yyyy from Mdyy', () => {
                    var date = '1180';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('01/01/1980');
                });

                it('should return input when input cannot be formatted', () => {
                    var date = '13011980';
                    var result = service.formatShortDate(date);
                    expect(result).toBe(date);
                });
            });

            describe('given input has separators', () => {
                it('should return MM/dd/yyyy', () => {
                    var date = '1/1/1980';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('01/01/1980');
                });

                it('should return input when input cannot be formatted', () => {
                    var date = '13/01/1980';
                    var result = service.formatShortDate(date);
                    expect(result).toBe(date);
                });
            });
        });

        describe('isValidShortDate', () => {
            describe('given input has separators', () => {
                describe('given day is out of range', () => {
                    it('should return false for February in non-leap year', () => {
                        var date = '02/29/2015';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });

                    it('should return false for September, April, June and November', () => {
                        var date = '4/31/1980';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });

                    it('should return false for January, March, May, July, August, October and December', () => {
                        var date = '12/32/1980';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                });

                it('should return true for leap days', () => {
                    var date = '02/29/2012';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });

                it('should return false when month is out of range', () => {
                    var date = '13/13/1980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return false when year is less than 1800', () => {
                    var date = '12/31/1799';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return false when year is greater than 2099', () => {
                    var date = '12/31/2100';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return true when input is valid date', () => {
                    var date = '12/13/1980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });

                it('should return false when input is not valid date', () => {
                    var date = '1/0/1980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
            });

            describe('given input does not have separators', () => {
                describe('given day is out of range', () => {
                    it('should return false for February in non-leap year', () => {
                        var date = '2292015';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });

                    it('should return false for September, April, June and November', () => {
                        var months = ['4', '6', '9', '11'];

                        months.forEach((month) => {
                            var result = service.isValidShortDate(`${month}311980`);
                            expect(result).toBe(false);
                        });
                    });

                    it('should return false for January, March, May, July, August, October and December', () => {
                        var months = ['1', '3', '5', '7', '8', '10', '12'];

                        months.forEach((month) => {
                            var result = service.isValidShortDate(`${month}321980`);
                            expect(result).toBe(false);
                        });
                    });
                });

                it('should return true for leap days', () => {
                    var date = '2292012';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });

                it('should return false when month is out of range', () => {
                    var date = '13131980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return false when year is less than 1800', () => {
                    var date = '12311799';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return false when year is greater than 2099', () => {
                    var date = '12312100';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return true when input is valid date', () => {
                    var date = '12131980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });

                it('should return false when input is not valid date', () => {
                    var date = '101980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
            });
        });
    });

    describe('with Canadian Behavior', () => {
        var service: DateServiceInterfaces.IDateService;
        var behavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.CanadianParser());

        beforeEach(() => {
            service = new DateService(behavior);
        });

        describe('localDateFormat', () => {
            it('should return yyyy-MM-dd', () => {
                var result = service.localDateFormat;
                expect(result).toBe('yyyy-MM-dd');
            });
        });

        describe('formatShortDate', () => {
            describe('given input does not have separators', () => {
                it('should return yyyy-MM-dd from yyyyMd', () => {
                    var date = '198011';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('1980-01-01');
                });

                it('should return yyyy-MM-dd from yyMd', () => {
                    var date = '8011';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('1980-01-01');
                });

                it('should return input when input cannot be formatted', () => {
                    var date = '19801301';
                    var result = service.formatShortDate(date);
                    expect(result).toBe(date);
                });
            });

            describe('given input has separators', () => {
                it('should return yyyy-MM-dd', () => {
                    var date = '1980-1-1';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('1980-01-01');
                });

                it('should return input when input cannot be formatted', () => {
                    var date = '1980-13-01';
                    var result = service.formatShortDate(date);
                    expect(result).toBe(date);
                });
            });
        });

        describe('isValidShortDate', () => {
            describe('given input has separators', () => {
                describe('given day is out of range', () => {
                    it('should return false for February in non-leap year', () => {
                        var date = '2015-02-29';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });

                    it('should return false for September, April, June and November', () => {
                        var date = '1980-4-31';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });

                    it('should return false for January, March, May, July, August, October and December', () => {
                        var date = '1980-12-32';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                });

                it('should return true for leap days', () => {
                    var date = '2012-02-29';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });

                it('should return false when month is out of range', () => {
                    var date = '1980-13-13';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return false when year is less than 1800', () => {
                    var date = '1799-12-31';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return false when year is greater than 2099', () => {
                    var date = '2100-12-31';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return true when input is valid date', () => {
                    var date = '1980-12-13';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });

                it('should return false when input is not valid date', () => {
                    var date = '1980-1-0';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
            });

            describe('given input does not have separators', () => {
                describe('given day is out of range', () => {
                    it('should return false for February in non-leap year', () => {
                        var date = '2015229';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });

                    it('should return false for September, April, June and November', () => {
                        var months = ['4', '6', '9', '11'];

                        months.forEach((month) => {
                            var result = service.isValidShortDate(`1980${month}31`);
                            expect(result).toBe(false);
                        });
                    });

                    it('should return false for January, March, May, July, August, October and December', () => {
                        var months = ['1', '3', '5', '7', '8', '10', '12'];

                        months.forEach((month) => {
                            var result = service.isValidShortDate(`1980${month}32`);
                            expect(result).toBe(false);
                        });
                    });
                });

                it('should return true for leap days', () => {
                    var date = '2012229';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });

                it('should return false when month is out of range', () => {
                    var date = '19801313';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return false when year is less than 1800', () => {
                    var date = '17991231';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return false when year is greater than 2099', () => {
                    var date = '21001231';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });

                it('should return true when input is valid date', () => {
                    var date = '19801213';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });

                it('should return false when input is not valid date', () => {
                    var date = '198010';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
            });
        });
    });

    describe('DateServiceFactory', () => {
        var locale: DateServiceInterfaces.ILocaleProvider = { id: 'en-us' };
        var mockFlagService: FeatureFlags.IFeatureFlagService = {
            isEnabled: (): boolean => { return false; }
        };

        var getServiceBehavior = (l) => { return new DateServiceFactories.DateServiceBehaviorFactory(new DateServiceFactories.DateFormatBehaviorFactory(l, mockFlagService), new DateServiceFactories.DateParseBehaviorFactory(l)); }

        var service = new DateServiceFactories.DateServiceFactory(getServiceBehavior(locale));

        var setLocale = (id: string) => {
            locale.id = id;
        };

        describe('instance', () => {
            describe('given locale is English US', () => {
                beforeEach(() => {
                    setLocale('en-us');
                });

                it('should have US behavior', () => {
                    var result = service.instance.localDateFormat;
                    expect(result).toBe('MM/dd/yyyy');
                });
            });

            describe('given locale is English Canadian', () => {
                beforeEach(() => {
                    setLocale('en-ca');
                });

                it('should have Canadian behavior', () => {
                    var result = service.instance.localDateFormat;
                    expect(result).toBe('yyyy-MM-dd');
                });

                describe('and always use US format flag is on', () => {
                    it('should have US formatting behavior', () => {
                        spyOn(mockFlagService, 'isEnabled').and.returnValue(true);
                        var result = service.instance.localDateFormat;
                        expect(result).toBe('MM/dd/yyyy');
                    });
                });
            });

            describe('given locale is French Canadian', () => {
                beforeEach(() => {
                    setLocale('fr-ca');
                });

                it('should have Canadian behavior', () => {
                    var result = service.instance.localDateFormat;
                    expect(result).toBe('yyyy-MM-dd');
                });
            });
        });
    });
});