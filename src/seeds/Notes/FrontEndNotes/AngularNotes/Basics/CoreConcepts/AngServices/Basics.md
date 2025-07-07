# Angular Services – Basics

Angular services are singleton objects that encapsulate shared logic and support Dependency Injection (DI).

---

## Creating a Service

```ts
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class DataService {
  private items: string[] = ['One', 'Two', 'Three']
  getItems(): string[] { return this.items }
  addItem(item: string): void { this.items.push(item) }
}
```

The <span class="codeSnip">@Injectable({ providedIn: 'root' })</span> decorator makes the service available app-wide—no need to add it to `providers`.

---

## Injecting into Components

```ts
@Component({...})
export class AppComponent {
  items: string[]
  constructor(private data: DataService) {
    this.items = data.getItems()
  }
}
```

Dependency Injection ensures you use a single shared instance of DataService.

> Next: Dive deeper into Angular's hierarchical injectors and advanced DI scenarios.
