## TypeScript Basics  
---

2. The extends keyword allows TypeScript's type checker to perform faster checks compared to other symbols.

```typescript
extends
```

---

## React Functional Components with TypeScript  
---

### Using Generics in Functional Components

```typescript
interface ListProps<T> {
  items: T[];
  render: (item: T) => JSX.Element;
}

const List = <T,>({ items, render }: ListProps<T>) => (
  <ul>{items.map(render)}</ul>
);
```

Explanation: This example demonstrates how to use generics (<T>) to create reusable, type-safe components.

---

## Keys and TypeScript  
---

### Dynamic Key Mapping

```typescript
const dynamicKey = `${car.Brand.toLowerCase().replace(/\\s+/g, "-")}-${car.Model.toLowerCase().replace(/\\s+/g, "-")}`;
return DynamicImageKeys[dynamicKey] && Images[DynamicImageKeys[dynamicKey]]
  ? Images[DynamicImageKeys[dynamicKey]]
  : Images["placeholder"];
```

- Explanation: Use TypeScript for dynamic key mapping and type-safe string manipulation.

---

### Type-Safe Fallback Handling

```typescript
interface ImageMapping {
  [key: string]: string;
}

const Images: ImageMapping = {
  placeholder: "path/to/placeholder.png",
};
```

- Explanation: This ensures type-safe mappings and fallback handling for missing data.

---

## Environment Variables in TypeScript Projects

1. When using a .env package in the front-end, prefix environment variable keys with:

```dotenv
VITE_
```
- Explanation: This is required for proper integration in Vite-based projects.

---

Use this structure to optimize your React and TypeScript projects efficiently.
