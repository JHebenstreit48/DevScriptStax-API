## Union & Intersection Types

---

### Union Types

A union type allows a variable to hold one of several defined types. Use the <span class="codeSnip">|</span> symbol to combine them.

```typescript
let input: string | number;

input = "hello";
input = 42;
```

This is useful when accepting flexible inputs (e.g., string or numeric IDs) or defining state that could be multiple shapes.

#### Union with Literal Types

```typescript
type Direction = "left" | "right" | "up" | "down";

let move: Direction = "left";
```

---

### Intersection Types

An intersection type combines multiple types into one using the <span class="codeSnip">&</span> operator. The resulting type must satisfy **all** combined type conditions.

```typescript
type WithId = { id: number };
type WithName = { name: string };

type User = WithId & WithName;

const example: User = {
  id: 1,
  name: "Ada"
};
```

🧠 Intersection types are powerful when combining shared structures (like metadata + content) or composing layers of behavior.

---

### Keyword Spotlight: <span class="codeSnip">&</span>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Symbol</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&</span></td>
      <td class="tableCell">Combines multiple types into one intersection</td>
    </tr>
  </tbody>
</table>

---

### Summary

- 🧩 Use <span class="codeSnip">|</span> for flexibility (this or that)
- 🧱 Use <span class="codeSnip">&</span> for composition (this and that)
- ⚠️ Intersection types require all combined properties to be satisfied
