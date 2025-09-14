# Programming Paradigms

A programming paradigm is a style or a way of thinking about how to build a computer program. Each paradigm offers a different approach to problem-solving, with its own strengths and weaknesses.

---

## Imperative vs. Declarative Programming

This is the most fundamental distinction.

* **Imperative Programming:** This paradigm focuses on **how** a program should achieve a result. It is like giving a set of step-by-step instructions. The programmer explicitly controls the program's state and flow.
    * **Example in Java:** Using a `for` loop to iterate and manually update a variable. The code directly tells the computer what to do at each step to compute a sum.

      ```java
      int sum = 0;
      for (int i = 1; i <= 5; i++) {
          sum = sum + i;
      }
      System.out.println(sum); // Displays 15
      ```

* **Declarative Programming:** This paradigm focuses on **what** the program should accomplish, without specifying how. The programmer describes the desired outcome, and the system figures out the execution steps.
    * **Example in Java:** Using a `Stream` to filter and sum a collection of numbers. The code expresses the intention ("get the sum of these numbers"), and the Java runtime handles the implementation details.

      ```java
      import java.util.stream.IntStream;

      int sum = IntStream.rangeClosed(1, 5).sum();
      System.out.println(sum); // Displays 15
      ```

---

## Major Paradigms

1.  **Object-Oriented Programming (OOP):**
    This paradigm organizes code around **objects**, which are instances of **classes**. An object encapsulates both data (attributes) and behavior (methods). OOP is built on four core principles:
    * **Encapsulation:** Hiding the internal state of an object and restricting access to its data.
    * **Inheritance:** Creating new classes that reuse, modify, and extend the behavior of existing classes.
    * **Polymorphism:** Allowing objects of different classes to be treated as objects of a common superclass.
    * **Abstraction:** Focusing on essential information while hiding implementation details.
    * **Example in Java:** Creating a `Car` class with attributes like `color` and methods like `startEngine()`.

2.  **Functional Programming:**
    This paradigm treats computation as the evaluation of mathematical functions, avoiding changes in the program's state. Key concepts include **immutability** and treating functions as first-class citizens.
    * **Example in Java:** Using Java 8+ features like **lambda expressions** and **Streams** to perform operations on collections in a concise and expressive way. The code `numbers.stream().filter(n -> n % 2 == 0)` declares what to do (filter even numbers), rather than how to do it.

3.  **Logic Programming:**
    This is a paradigm where programs express **facts** and **rules**, and a built-in "inference engine" deduces new information from them. The programmer describes the knowledge, and the system finds the solutions.
    * **Example:** Prolog is a popular language for this paradigm. A program can state "John is a parent of Marie" and define a rule for "grandfather," and the system can then deduce who Marie's grandfather is.

4. **Event-Driven Programming:** In this paradigm,   the flow of the program is determined by **events**, such as a user clicking a mouse button or a keypress. The program waits for an event and then reacts by executing a specific function (an **event handler**). It's a "wait and see" approach.
    * **Example:** A graphical user interface (GUI) where a button click triggers a function to save a file.

5. **Reactive Programming:** This is a more sophisticated paradigm built on the idea of **data streams** and the propagation of change. It's about building systems that automatically update when data changes. While it relies on events, it treats them as continuous streams of data that can be filtered, transformed, and combined.
    * **Example:** A spreadsheet where changing the value of one cell automatically updates the values of all other cells that depend on it.

    **Key Differences between event-driven and reactive:** Event-driven programming is about reacting to individual, discrete events. Reactive programming takes this a step further by treating sequences of events as continuous data streams, focusing on how changes automatically propagate through the system. All reactive systems are event-driven, but not all event-driven systems are reactive.

---

## Conclusion

Modern languages like Java are often **multi-paradigm**, meaning they support elements from several paradigms, most notably imperative, object-oriented, and functional programming. Choosing the right paradigm or combining them effectively depends on the problem you're trying to solve. For a shopping cart, an OOP approach might involve an object with methods and attributes, whereas a functional approach might use a pure function to calculate the total price from a list of items.