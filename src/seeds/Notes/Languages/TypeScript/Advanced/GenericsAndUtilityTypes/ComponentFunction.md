## Component & Function Generics

---
### Overview
---

Generics let you write **reusable** code that still keeps **type safety**.

Instead of hard-coding a type (like <span class="codeSnip">string</span> or <span class="codeSnip">number</span>), you write a function or component that can work with **many types**, and TypeScript will “fill in the blank” when you use it.

---
### The Big Idea (Why Generics Exist)
---

Without generics, you often end up with:
- duplicated functions for different types
- or <span class="codeSnip">any</span>, which removes type safety

Generics solve this by allowing a placeholder type like <span class="codeSnip">T</span> (or <span class="codeSnip">TValue</span>, <span class="codeSnip">TItem</span>, etc.)

---
### Function Generics (Basic Example)
---

A generic function uses a type parameter:

```ts
function identity<T>(value: T): T {
  return value
}
```

Here:
- <span class="codeSnip">T</span> is a type placeholder
- whatever type goes in, the same type comes out

Usage:

```ts
const a = identity<string>("hello")
const b = identity<number>(42)
```

TypeScript infers:
- <span class="codeSnip">a</span> is <span class="codeSnip">string</span>
- <span class="codeSnip">b</span> is <span class="codeSnip">number</span>

---
### Type Inference with Generics
---

You usually do not need to manually provide the type.

TypeScript often infers it automatically:

```ts
const a = identity("hello")
const b = identity(42)
```

This keeps code clean while staying type-safe.

---
### Generics with Arrays
---

Generics become very useful when working with collections.

Example:

```ts
function firstItem<T>(items: T[]): T {
  return items[0]
}
```

```ts
const firstName = firstItem(["Alice", "Bob"]) // string
const firstNumber = firstItem([10, 20, 30])   // number
```

---
### Generic Constraints
---

Sometimes you want to allow many types, but still require certain properties.

Use <span class="codeSnip">extends</span> to add a constraint:

```ts
function lengthOf<T extends { length: number }>(value: T): number {
  return value.length
}
```

Valid:

```ts
lengthOf("hello")
lengthOf([1, 2, 3])

Invalid (no length):
```

```ts
lengthOf(123)
```

---
### Common Generic Naming
---

You will often see:

- <span class="codeSnip">T</span> = generic type
- <span class="codeSnip">TItem</span> = item type in a list
- <span class="codeSnip">TData</span> = data shape
- <span class="codeSnip">TKey</span> / <span class="codeSnip">TValue</span> = key/value generics

The name matters less than clarity.

---
### Component Generics (React Pattern)
---

Generic components are useful when a component works with different item types.

Example: a reusable list component.

```ts
type ListProps<T> = {
  items: T[]
  renderItem: (item: T) => string
}
```

```ts
function List<T>({ items, renderItem }: ListProps<T>) {
  return items.map(renderItem).join("\n")
}
```

Usage:

```ts
const output = List({
  items: ["A", "B", "C"],
  renderItem: (item) => item.toLowerCase(),
})
```

Here TypeScript infers <span class="codeSnip">T</span> as <span class="codeSnip">string</span>.

---
### When to Use Generics
---

Generics are a good fit when:
- your function/component should work with multiple types
- you want to preserve the input type in the output
- you want reusable utilities without losing type safety

Avoid generics when:
- a union type is clearer (<span class="codeSnip">string | number</span>)
- the function is only ever meant for one specific shape

---
### Summary
---

- Generics make reusable code type-safe
- <span class="codeSnip">T</span> is a placeholder type that TypeScript fills in
- Use constraints (<span class="codeSnip">extends</span>) when you need required properties
- Generic components are especially useful for reusable UI patterns

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/advanced/types/guards-assertions">← Back</a>
    <div class="xrefTitle">TypeScript Types → Guards & Assertions</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/advanced/generics/utilities">Next →</a>
    <div class="xrefTitle">TypeScript Generics → Built-in Utility Types</div>
  </div>
</div>