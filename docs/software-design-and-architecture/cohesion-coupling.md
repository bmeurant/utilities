# Cohesion & Coupling

In software engineering, **cohesion** and **coupling** are two fundamental principles used to evaluate the quality of an architecture. Together, they determine a system's robustness and flexibility. The goal of a good design is to achieve **high cohesion** and **low coupling**.

---

## 1. Cohesion: The "Inner Strength" of a Module

Cohesion measures how well a module's internal elements are united to accomplish a single, well-defined task. It's about a module's focus and specialization.

### Cohesion Levels (from best to worst)

* **High Cohesion (Desirable)**: A highly cohesive module is a specialist with a clear mission. Think of a **mechanic's toolbox** . Every tool is there for a specific purpose and contributes to a common goal.
    * **Functional Cohesion**: The highest level. The module performs a single, atomic task, like a function that validates an email format.
    * **Sequential Cohesion**: Elements are linked because the output from one part is the input to the next. For example, a module that reads a file and then processes the content it just read.
    * **Communicational Cohesion**: Elements are linked because they process the same data set. For example, a module that connects, verifies, and loads a user's profile. The tasks are distinct but all operate on the user's data.

* **Low Cohesion (To Avoid)**: A module with low cohesion is disorganized, and its elements are loosely related or unrelated. It's like a messy **kitchen junk drawer** . It contains a little bit of everything, making it difficult to understand, modify, or reuse.
    * **Temporal Cohesion**: The lowest level. Elements are grouped because they are executed at the same time, without a functional or data relationship (e.g., a module that initializes all variables on application startup).

---

## 2. Coupling: The "Interdependence" of Modules

Coupling measures the degree of dependency between modules. Low coupling is key to a flexible and maintainable system.

### Coupling Levels (from best to worst)

* **Low Coupling (Desirable)**: Modules are largely independent and interact through simple, clear interfaces.
    * **Data Coupling**: The lowest and most desirable form. Modules exchange only the necessary data. For example, a user interface module calling `addBook(title, author, year)` in a book management module.
    * **Stamp Coupling**: A module passes an entire data structure (like a complete `user` object) to another module that only needs a part of it. This is slightly higher coupling than data coupling because the modules are tied to a shared data structure.

* **High Coupling (To Avoid)**: Modules are tightly linked. A change in one module is likely to break another.
    * **Control Coupling**: A module passes a parameter (like a string or a flag) that dictates the behavior of the called module's internal logic. This creates a dependency on the function's logic, making it fragile.
    * **Common Coupling**: The highest level. Modules share a global data area, which means any module can read and modify the data. This creates a very strong and dangerous dependency, as a change in one module can have unpredictable side effects on all others.

---

## 3. The Relationship Between the Two

Cohesion and coupling have an **inverse relationship**. This synergy is at the heart of good software design.

* **Strong Cohesion → Low Coupling**: A module with a single responsibility is more autonomous. It needs less information from the outside, which minimizes its dependence on other modules.
* **Low Cohesion → High Coupling**: A module that does multiple things often needs to rely on other modules to perform its various tasks, creating strong and complex dependencies.

Prioritizing strong cohesion and low coupling results in software that is more **maintainable** (bugs are isolated), more **understandable** (each part has a clear function), and more **reusable** (modules are independent units that can be used elsewhere).