# Components

Angular components are the **building blocks** of Angular applications: they combine a class, template, and metadata to define UI behavior.

---

## Anatomy of a Component

An Angular component consists of:

- A TypeScript class handling data and logic  
- A template defining the UI  
- Metadata via <span class="codeSnip">@Component</span> decorator

Example:

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-hello',
  template: `<h1>{{title}}</h1><button (click)="update()">Change</button>`
})
export class HelloComponent {
  title = 'Hello, Angular!'
  update() { this.title = 'Title Changed!' }
}
```

The <span class="codeSnip">(click)</span> syntax binds click events to <span class="codeSnip">update()</span>—a central part of component interactivity.

---

## Why Components Matter

- Promote **reusability** and encapsulation  
- Support structured UI composition  
- Enable data and event binding between parent and child components

Angular uses components to build scalable, maintainable applications.

> Next: Learn about reusable design patterns and how to structure components.
