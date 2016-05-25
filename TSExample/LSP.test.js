/// <reference path="LSPViolationAvoidance.ts"/>
'use strict';
describe('AreaLogger', function () {
    it('should log the area of a shape', function () {
        var shapes = [
            new Square(4),
            new Rectangle(4, 5),
            new Circle(3),
            new Triangle(4, 3)
        ];
        var logger = new AreaLogger();
        for (var shape in shapes) {
            if (shapes.hasOwnProperty(shape)) {
                logger.log(shapes[shape]);
            }
        }
    });
});
//# sourceMappingURL=LSP.test.js.map