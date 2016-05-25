interface IGreetBehavior {
    /*
    This interface exposes a greet method that can be implemented by any class
    that chooses to implement it.

    Why? Interfaces should expose behaviors that can be implemented by any class.
    This allows other classes to take an interface as a dependency without depending
    on the implementation itself.

    "Program to an interface." http://www.fatagnus.com/program-to-an-interface-not-an-implementation/
    */

    greet(): string;
}