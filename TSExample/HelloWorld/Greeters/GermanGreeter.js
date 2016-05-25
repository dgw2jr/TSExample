var GermanGreeter = (function () {
    function GermanGreeter() {
    }
    /*
     Another implementation of an interface, because a story was added later to support
     German culture. Interfaces let us anticipate changes like this.
    */
    GermanGreeter.prototype.greet = function () {
        return 'Guten tag';
    };
    return GermanGreeter;
}());
//# sourceMappingURL=GermanGreeter.js.map