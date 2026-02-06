# Introduction

---
### What Vue Is
---

Vue is a JavaScript framework for building user interfaces.

It helps you build interactive web apps by letting you describe what the UI should look like based on your data, and then Vue keeps the UI in sync when that data changes.

---
### The Big Idea
---

Vue is built around a simple workflow:

- You write a template that describes the UI
- You store data/state for the UI
- Vue updates the page automatically when that data changes

This “reactive UI” approach helps you avoid manually updating the DOM every time something changes.

---
### How Vue Apps Are Organized
---

Most Vue projects are organized around components.

A component is a reusable piece of UI that can include:
- Markup (what to render)
- Logic (how it behaves)
- Styles (how it looks)

A common pattern is using a Single File Component (SFC), usually named with <span class="emphasis">.vue</span>, which groups template, logic, and styles together.

---
### Where This Fits in the Notes
---

This Fundamentals section is the starting point.

- <span class="emphasis">Vue CLI</span> covers creating and running a Vue project (Vite/Vue CLI)
- <span class="emphasis">Syntax</span> covers how Vue templates and directives work
- <span class="emphasis">Components</span> goes deeper into how Vue apps are built from reusable UI pieces

---
### Summary
---

- Vue is a framework for building reactive user interfaces
- You describe UI based on data, and Vue keeps it updated automatically
- Vue projects are typically organized around components