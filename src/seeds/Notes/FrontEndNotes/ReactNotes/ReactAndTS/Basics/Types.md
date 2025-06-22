# Basic Types in TypeScript

---

## Why Types Matter in React Projects

TypeScript helps reduce bugs in your React applications by enforcing consistency and providing autocomplete and IntelliSense during development. In this section, we’ll explore how to define and use types in the context of React.

---

## Declaring Global Types with .d.ts Files

- A <span class="codeSnip">.d.ts</span> file is a TypeScript declaration file used to define type information globally.
- These files help you centralize and reuse types across your app.
- Adding the <span class="codeSnip">declare</span> keyword ensures that the type is treated as ambient and cannot be redefined or augmented elsewhere.

---

## Types vs. Interfaces

- Use <span class="codeSnip">type</span> by default in most cases.
- Use <span class="codeSnip">interface</span> when you need:
  - Extension or merging behavior
  - Object shape declarations shared across multiple components
- Interfaces are best for public APIs and object-oriented models.
- Types are more flexible and can represent:
  - Unions
  - Intersections
  - Conditional and mapped types

---

## Intersection Types

- An intersection combines multiple types into one using the <span class="codeSnip">&</span> operator.
- This is useful when you want to combine properties from different type definitions.

```ts
type WithId = { id: number };
type WithName = { name: string };
type User = WithId & WithName;
```

---

## Merging Interfaces

- Interfaces with the same name declared in the same scope automatically merge.

```ts
interface Person {
  firstName: string;
}

interface Person {
  lastName: string;
}

// Result:
const user: Person = {
  firstName: 'Ada',
  lastName: 'Lovelace'
};
```

This is not possible with <span class="codeSnip">type</span> aliases.

---

## Index Signatures

- Index signatures are used when the exact keys are unknown, but the value types are consistent.

```ts
interface Dictionary {
  [key: string]: string;
}

const config: Dictionary = {
  theme: 'dark',
  language: 'en'
};
```

---

## Common TypeScript Keywords in React Projects

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Keyword / Symbol</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useContext</span></td>
      <td class="tableCell">Access context values without prop drilling</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">extends</span></td>
      <td class="tableCell">Builds new types from existing ones using inheritance</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&</span></td>
      <td class="tableCell">Creates intersection types by combining multiple types</td>
    </tr>
  </tbody>
</table>

---

## Linting Tip: Avoid Interface Collisions

TypeScript allows interfaces with the same name to merge — this can be useful, but sometimes it’s unintentional.

Many linting tools include a rule to help catch these potential conflicts:

```shell
no-redeclare
```

This ensures your types remain consistent and predictable in larger codebases.

