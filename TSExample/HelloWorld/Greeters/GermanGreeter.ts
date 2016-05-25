class GermanGreeter implements IGreetBehavior {
    /*
     Another implementation of an interface, because a story was added later to support
     German culture. Interfaces let us anticipate changes like this.
    */
    greet(): string {
        return 'Guten tag';
    }
}