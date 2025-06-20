## TypeScript Basics  
---

### Keywords and Symbols

1. The following hook allows you to make data accessible directly where it is needed in your application and manage the state between components without passing props manually:

```typescript
useContext
```

2. The extends keyword allows TypeScript's type checker to perform faster checks compared to other symbols.

```typescript
extends
```

3. The & symbol is used with types to create an intersection.

```typescript
&
```

---

## TypeScript Configuration Files

### Configuring Path Aliases in tsconfig.json

React projects using TypeScript can simplify imports with aliases configured in the `tsconfig.json` file. This is particularly useful in larger projects to manage imports efficiently.

### tsconfig.json Configuration

json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}

---

### Explanation

- The `baseUrl` specifies the root directory for module resolution.
- The `paths` map custom aliases (e.g., `@components/`) to directories within the project (e.g., `src/components/`).
- In React projects, this simplifies importing frequently used files like components, hooks, or utility functions.
- Path aliases improve readability, scalability, and ease of refactoring in React and TypeScript projects.

---

### Key Configuration Files in React with TypeScript

1. The following file sets the configuration rules for the React application portion of the project:

```bash
tsconfig.app.json
```

2. The following file sets the configuration rules for the Node.js environment portion of the project:

```bash
tsconfig.node.json
```

## React Functional Components with TypeScript  
---

### Defining Components with Props

```typescript
interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => <h1>Hello, {name}!</h1>;
```

- Explanation: This defines a functional component with strongly-typed props.

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
