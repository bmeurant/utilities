# Vertex AI Services: A Tiered Overview

This document outlines the different levels of service within Vertex AI, structured as a pyramid from the most abstract, ready-to-use solutions to the most fundamental, customizable components.

---

## Level 1 (The Summit): Vertex AI Search Applications

*   **What It Is:** A complete, packaged solution. You provide your data, and it delivers a fully functional search or conversational application, complete with a user interface, widgets, and more. This is what the documentation refers to as "creating a search application."

*   **Analogy:** Buying a fully assembled car, complete with the dashboard, seats, and radio. You just need to turn the key.

*   **Target Audience:** Ideal for those who need to rapidly deploy a search solution on a website or internal portal with minimal coding.

*   **Key Takeaway:** This is likely too high a level of abstraction if your goal is to build a custom agent that requires RAG capabilities, rather than a pre-built application.

---

## Level 2 (The Engine): RAG Engine

*   **What It Is:** The foundational engine that provides Retrieval-Augmented Generation (RAG) capabilities (retrieval + grounding). It is not a complete application but a service that your own application (e.g., an ADK agent) can call via an API.

*   **Analogy:** Buying the engine block and transmission. It's up to you to build the chassis, body, and interior around it.

*   **Target Audience:** Perfect for developers building custom applications who need a powerful, managed RAG component.

*   **Key Takeaway:** This is the appropriate service level if you are building a custom solution and need to integrate RAG features.

---

## Level 3 (The Foundation): Data Sources

The RAG Engine (Level 2) requires data to function. It can source this data in two primary ways:

1.  **Via Vertex AI Search Data Stores:**
    *   This is the "rich" method. A Data Store is a complex data structure that can be utilized by both full-fledged search applications (Level 1) and the RAG Engine (Level 2).

2.  **Via the RAG API and a `Corpus`:**
    *   This is a more direct and lightweight approach, specifically designed for the RAG Engine. A `Corpus` is a simpler document container, managed through a dedicated API (`rag.googleapis.com`), and is optimized for RAG use cases.
