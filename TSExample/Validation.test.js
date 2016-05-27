describe('Validator', function () {
    var minLength = function (str, len) {
        if (!str) {
            return true;
        }
        return str.length >= len;
    };
    var maxLength = function (str, len) {
        return str.length < len;
    };
    var isPhone = function (phone) {
        return /^\d{3}\d{3}\d{4}$/.test(phone);
    };
    var required = function (input) {
        return !!input;
    };
    var rules = {
        addressLine1: [required, function (m) { return maxLength(m, 40); }],
        addressLine2: [function (m) { return maxLength(m, 40); }],
        city: [required, function (m) { return maxLength(m, 40); }]
    };
    it('should return false when a model property breaks rule', function () {
        var models = [
            {
                addressLine1: 'ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
                addressLine2: '',
                city: ''
            },
            {
                addressLine1: 'IPass',
                addressLine2: 'ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
                city: ''
            },
            {
                addressLine1: 'IPass',
                addressLine2: '',
                city: ''
            },
            {
                addressLine1: 'IPass',
                addressLine2: 'IPass',
                city: ''
            }
        ];
        var sut = new Validator();
        for (var model in models) {
            if (models.hasOwnProperty(model)) {
                var result = sut.isValid(models[model], rules);
                expect(result).toBe(false);
            }
        }
    });
    it('should return true when model properties pass all rules', function () {
        var models = [
            {
                addressLine1: 'IPass',
                addressLine2: 'IPass',
                city: 'IPass'
            }
        ];
        var sut = new Validator();
        for (var model in models) {
            if (models.hasOwnProperty(model)) {
                var result = sut.isValid(models[model], rules);
                expect(result).toBe(true);
            }
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmFsaWRhdGlvbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxTQUFTLEdBQUcsVUFBQyxHQUFHLEVBQUUsR0FBRztRQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7SUFDN0IsQ0FBQyxDQUFBO0lBRUQsSUFBSSxTQUFTLEdBQUcsVUFBQyxHQUFHLEVBQUUsR0FBRztRQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQyxDQUFBO0lBRUQsSUFBSSxPQUFPLEdBQUcsVUFBQyxLQUFhO1FBQ3hCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFBO0lBRUQsSUFBSSxRQUFRLEdBQUcsVUFBQyxLQUFLO1FBQ2pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsQ0FBQTtJQUVELElBQUksS0FBSyxHQUFXO1FBQ2hCLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQWhCLENBQWdCLENBQUM7UUFDakQsWUFBWSxFQUFFLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFoQixDQUFnQixDQUFDO1FBQ3ZDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQWhCLENBQWdCLENBQUM7S0FDNUMsQ0FBQztJQUVGLEVBQUUsQ0FBQyx1REFBdUQsRUFBRTtRQUN4RCxJQUFJLE1BQU0sR0FBZTtZQUNyQjtnQkFDSSxZQUFZLEVBQUUseUVBQXlFO2dCQUN2RixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxFQUFFLEVBQUU7YUFDWDtZQUNEO2dCQUNJLFlBQVksRUFBRSxPQUFPO2dCQUNyQixZQUFZLEVBQUUseUVBQXlFO2dCQUN2RixJQUFJLEVBQUUsRUFBRTthQUNYO1lBQ0Q7Z0JBQ0ksWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixJQUFJLEVBQUUsRUFBRTthQUNYO1lBQ0Q7Z0JBQ0ksWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLFlBQVksRUFBRSxPQUFPO2dCQUNyQixJQUFJLEVBQUUsRUFBRTthQUNYO1NBQ0osQ0FBQztRQUVGLElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxFQUFZLENBQUM7UUFFcEMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRS9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5REFBeUQsRUFBRTtRQUMxRCxJQUFJLE1BQU0sR0FBZTtZQUNyQjtnQkFDSSxZQUFZLEVBQUUsT0FBTztnQkFDckIsWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLElBQUksRUFBRSxPQUFPO2FBQ2hCO1NBQ0osQ0FBQztRQUVGLElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxFQUFZLENBQUM7UUFFcEMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRS9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=