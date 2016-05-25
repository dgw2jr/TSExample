describe('Validator', () => {
    var minLength = (str, len) => {
        if (!str) {
            return true;
        }

        return str.length >= len;
    }

    var maxLength = (str, len) => {
        return str.length < len;
    }

    var isPhone = (phone: string) => {
        return /^\d{3}\d{3}\d{4}$/.test(phone);
    }

    var required = (input) => {
        return !!input;
    }

    var rules: IRules = {
        addressLine1: [required, (m) => maxLength(m, 40)],
        addressLine2: [(m) => maxLength(m, 40)],
        city: [required, (m) => maxLength(m, 40)]
    };

    it('should return false when a model property breaks rule', () => {
        var models: IAddress[] = [
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

        var sut = new Validator<IAddress>();

        for (var model in models) {
            if (models.hasOwnProperty(model)) {
                var result = sut.isValid(models[model], rules);

                expect(result).toBe(false);
            }
        }
    });

    it('should return true when model properties pass all rules', () => {
        var models: IAddress[] = [
            {
                addressLine1: 'IPass',
                addressLine2: 'IPass',
                city: 'IPass'
            }
        ];

        var sut = new Validator<IAddress>();

        for (var model in models) {
            if (models.hasOwnProperty(model)) {
                var result = sut.isValid(models[model], rules);

                expect(result).toBe(true);
            }
        }
    });
});