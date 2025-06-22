## Core Types

---

### What Are Core Types?

Core types in TypeScript define the most basic and widely used data shapes. These include primitive values like strings and numbers, as well as more structured types like arrays and objects.

✅ Understanding core types is the foundation of working with TypeScript effectively.

---

### Primitive Types

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Example</th>
      <th class="tableCellHeader">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">string</span></td>
      <td class="tableCell"><span class="codeSnip">let name: string = "Alice";</span></td>
      <td class="tableCell">Represents text</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">number</span></td>
      <td class="tableCell"><span class="codeSnip">let age: number = 30;</span></td>
      <td class="tableCell">Used for all numeric values</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">boolean</span></td>
      <td class="tableCell"><span class="codeSnip">let isActive: boolean = true;</span></td>
      <td class="tableCell">Represents true or false</td>
    </tr>
  </tbody>
</table>

---

### Complex Types

#### Arrays

Use square brackets or <span class="codeSnip">Array&lt;T&gt;</span> notation.

```typescript
let colors: string[] = ["red", "green"];
let scores: Array<number> = [10, 20, 30];
```

#### Tuples

Tuples define a fixed-length array with specified types at each index.

```typescript
let user: [string, number] = ["Alice", 25];
```

---

### Object Types

Define structured data using object shapes.

```typescript
let person: {
  name: string;
  age: number;
  isMember: boolean;
} = {
  name: "Charlie",
  age: 28,
  isMember: true
};
```

---

### Literal Types

Literal types allow you to specify exact values a variable can have.

```typescript
let direction: "left" | "right" = "left";
```

---

### Type Inference

TypeScript can often infer the type of a variable from its initial value:

```typescript
let count = 42; // inferred as number
let username = "admin"; // inferred as string
```

You can override inference by explicitly typing:

```typescript
let id: string = "user-123";
```

---

### Summary

- 🎯 Use core types to define the shape and intent of your values.
- 🧠 Let TypeScript infer types where it improves readability.
- ⚠️ Explicitly annotate when inference isn't clear or when exporting/shared across modules.
