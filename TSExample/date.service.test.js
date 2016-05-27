'use strict';
var DateService = DateServices.DateService;
describe('Date Service', function () {
    describe('with default behavior', function () {
        describe('with overridden format behavior', function () {
            var service;
            var initialServiceBehavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.CanadianParser());
            var newFormatter = new DateFormatters.UsFormatter();
            beforeEach(function () {
                service = new DateService(initialServiceBehavior);
            });
            it('should have the override behavior', function () {
                var overriddenService = service.withServiceBehavior(initialServiceBehavior.withFormatter(newFormatter));
                var result = overriddenService.formatShortDate('1980-12-01');
                expect(result).toBe('12/01/1980');
            });
        });
        describe('with overridden parse behavior', function () {
            var service;
            var initialServiceBehavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.CanadianParser());
            var newParser = new DateParsers.UsParser();
            beforeEach(function () {
                service = new DateService(initialServiceBehavior);
            });
            it('should have the override behavior', function () {
                var overriddenService = service.withServiceBehavior(initialServiceBehavior.withParser(newParser));
                var result = overriddenService.formatShortDate('12/01/1980');
                expect(result).toBe('1980-12-01');
            });
        });
        describe('with overridden service behavior', function () {
            var service;
            var initialBehavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.CanadianParser());
            var newBehavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.UsParser());
            beforeEach(function () {
                service = new DateService(initialBehavior);
            });
            it('should have the override behavior', function () {
                var overriddenService = service.withServiceBehavior(newBehavior);
                var result = overriddenService.formatShortDate('12/01/1980');
                expect(result).toBe('1980-12-01');
            });
        });
    });
    describe('with US Behavior', function () {
        var service;
        var behavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.UsFormatter(), new DateParsers.UsParser());
        beforeEach(function () {
            service = new DateService(behavior);
        });
        describe('localDateFormat', function () {
            it('should return MM/dd/yyyy', function () {
                var result = service.localDateFormat;
                expect(result).toBe('MM/dd/yyyy');
            });
        });
        describe('formatShortDate', function () {
            describe('given input does not have separators', function () {
                it('should return MM/dd/yyyy from Mdyyyy', function () {
                    var date = '111980';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('01/01/1980');
                });
                it('should return MM/dd/yyyy from Mdyy', function () {
                    var date = '1180';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('01/01/1980');
                });
                it('should return input when input cannot be formatted', function () {
                    var date = '13011980';
                    var result = service.formatShortDate(date);
                    expect(result).toBe(date);
                });
            });
            describe('given input has separators', function () {
                it('should return MM/dd/yyyy', function () {
                    var date = '1/1/1980';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('01/01/1980');
                });
                it('should return input when input cannot be formatted', function () {
                    var date = '13/01/1980';
                    var result = service.formatShortDate(date);
                    expect(result).toBe(date);
                });
            });
        });
        describe('isValidShortDate', function () {
            describe('given input has separators', function () {
                describe('given day is out of range', function () {
                    it('should return false for February in non-leap year', function () {
                        var date = '02/29/2015';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                    it('should return false for September, April, June and November', function () {
                        var date = '4/31/1980';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                    it('should return false for January, March, May, July, August, October and December', function () {
                        var date = '12/32/1980';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                });
                it('should return true for leap days', function () {
                    var date = '02/29/2012';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });
                it('should return false when month is out of range', function () {
                    var date = '13/13/1980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return false when year is less than 1800', function () {
                    var date = '12/31/1799';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return false when year is greater than 2099', function () {
                    var date = '12/31/2100';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return true when input is valid date', function () {
                    var date = '12/13/1980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });
                it('should return false when input is not valid date', function () {
                    var date = '1/0/1980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
            });
            describe('given input does not have separators', function () {
                describe('given day is out of range', function () {
                    it('should return false for February in non-leap year', function () {
                        var date = '2292015';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                    it('should return false for September, April, June and November', function () {
                        var months = ['4', '6', '9', '11'];
                        months.forEach(function (month) {
                            var result = service.isValidShortDate(month + "311980");
                            expect(result).toBe(false);
                        });
                    });
                    it('should return false for January, March, May, July, August, October and December', function () {
                        var months = ['1', '3', '5', '7', '8', '10', '12'];
                        months.forEach(function (month) {
                            var result = service.isValidShortDate(month + "321980");
                            expect(result).toBe(false);
                        });
                    });
                });
                it('should return true for leap days', function () {
                    var date = '2292012';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });
                it('should return false when month is out of range', function () {
                    var date = '13131980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return false when year is less than 1800', function () {
                    var date = '12311799';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return false when year is greater than 2099', function () {
                    var date = '12312100';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return true when input is valid date', function () {
                    var date = '12131980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });
                it('should return false when input is not valid date', function () {
                    var date = '101980';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
            });
        });
    });
    describe('with Canadian Behavior', function () {
        var service;
        var behavior = new DateServiceBehaviors.DateServiceBehavior(new DateFormatters.CanadianFormatter(), new DateParsers.CanadianParser());
        beforeEach(function () {
            service = new DateService(behavior);
        });
        describe('localDateFormat', function () {
            it('should return yyyy-MM-dd', function () {
                var result = service.localDateFormat;
                expect(result).toBe('yyyy-MM-dd');
            });
        });
        describe('formatShortDate', function () {
            describe('given input does not have separators', function () {
                it('should return yyyy-MM-dd from yyyyMd', function () {
                    var date = '198011';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('1980-01-01');
                });
                it('should return yyyy-MM-dd from yyMd', function () {
                    var date = '8011';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('1980-01-01');
                });
                it('should return input when input cannot be formatted', function () {
                    var date = '19801301';
                    var result = service.formatShortDate(date);
                    expect(result).toBe(date);
                });
            });
            describe('given input has separators', function () {
                it('should return yyyy-MM-dd', function () {
                    var date = '1980-1-1';
                    var result = service.formatShortDate(date);
                    expect(result).toBe('1980-01-01');
                });
                it('should return input when input cannot be formatted', function () {
                    var date = '1980-13-01';
                    var result = service.formatShortDate(date);
                    expect(result).toBe(date);
                });
            });
        });
        describe('isValidShortDate', function () {
            describe('given input has separators', function () {
                describe('given day is out of range', function () {
                    it('should return false for February in non-leap year', function () {
                        var date = '2015-02-29';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                    it('should return false for September, April, June and November', function () {
                        var date = '1980-4-31';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                    it('should return false for January, March, May, July, August, October and December', function () {
                        var date = '1980-12-32';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                });
                it('should return true for leap days', function () {
                    var date = '2012-02-29';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });
                it('should return false when month is out of range', function () {
                    var date = '1980-13-13';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return false when year is less than 1800', function () {
                    var date = '1799-12-31';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return false when year is greater than 2099', function () {
                    var date = '2100-12-31';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return true when input is valid date', function () {
                    var date = '1980-12-13';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });
                it('should return false when input is not valid date', function () {
                    var date = '1980-1-0';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
            });
            describe('given input does not have separators', function () {
                describe('given day is out of range', function () {
                    it('should return false for February in non-leap year', function () {
                        var date = '2015229';
                        var result = service.isValidShortDate(date);
                        expect(result).toBe(false);
                    });
                    it('should return false for September, April, June and November', function () {
                        var months = ['4', '6', '9', '11'];
                        months.forEach(function (month) {
                            var result = service.isValidShortDate("1980" + month + "31");
                            expect(result).toBe(false);
                        });
                    });
                    it('should return false for January, March, May, July, August, October and December', function () {
                        var months = ['1', '3', '5', '7', '8', '10', '12'];
                        months.forEach(function (month) {
                            var result = service.isValidShortDate("1980" + month + "32");
                            expect(result).toBe(false);
                        });
                    });
                });
                it('should return true for leap days', function () {
                    var date = '2012229';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });
                it('should return false when month is out of range', function () {
                    var date = '19801313';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return false when year is less than 1800', function () {
                    var date = '17991231';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return false when year is greater than 2099', function () {
                    var date = '21001231';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
                it('should return true when input is valid date', function () {
                    var date = '19801213';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(true);
                });
                it('should return false when input is not valid date', function () {
                    var date = '198010';
                    var result = service.isValidShortDate(date);
                    expect(result).toBe(false);
                });
            });
        });
    });
    describe('DateServiceFactory', function () {
        var locale = { id: 'en-us' };
        var mockFlagService = {
            isEnabled: function () { return false; }
        };
        var getServiceBehavior = function (l) { return new DateServiceFactories.DateServiceBehaviorFactory(new DateServiceFactories.DateFormatBehaviorFactory(l, mockFlagService), new DateServiceFactories.DateParseBehaviorFactory(l)); };
        var service = new DateServiceFactories.DateServiceFactory(getServiceBehavior(locale));
        var setLocale = function (id) {
            locale.id = id;
        };
        describe('instance', function () {
            describe('given locale is English US', function () {
                beforeEach(function () {
                    setLocale('en-us');
                });
                it('should have US behavior', function () {
                    var result = service.instance.localDateFormat;
                    expect(result).toBe('MM/dd/yyyy');
                });
            });
            describe('given locale is English Canadian', function () {
                beforeEach(function () {
                    setLocale('en-ca');
                });
                it('should have Canadian behavior', function () {
                    var result = service.instance.localDateFormat;
                    expect(result).toBe('yyyy-MM-dd');
                });
                describe('and always use US format flag is on', function () {
                    it('should have US formatting behavior', function () {
                        spyOn(mockFlagService, 'isEnabled').and.returnValue(true);
                        var result = service.instance.localDateFormat;
                        expect(result).toBe('MM/dd/yyyy');
                    });
                });
            });
            describe('given locale is French Canadian', function () {
                beforeEach(function () {
                    setLocale('fr-ca');
                });
                it('should have Canadian behavior', function () {
                    var result = service.instance.localDateFormat;
                    expect(result).toBe('yyyy-MM-dd');
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5zZXJ2aWNlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLnNlcnZpY2UudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxZQUFZLENBQUM7QUFDYixJQUFPLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO0FBRTlDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDckIsUUFBUSxDQUFDLHVCQUF1QixFQUFFO1FBQzlCLFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRTtZQUN4QyxJQUFJLE9BQTJDLENBQUM7WUFDaEQsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUNwSixJQUFJLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVwRCxVQUFVLENBQUM7Z0JBQ1AsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUU7Z0JBQ3BDLElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN4RyxJQUFJLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRTtZQUN2QyxJQUFJLE9BQTJDLENBQUM7WUFDaEQsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLG1CQUFtQixD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