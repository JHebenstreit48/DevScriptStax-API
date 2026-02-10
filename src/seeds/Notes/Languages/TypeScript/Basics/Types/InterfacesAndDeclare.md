## Interfaces & Declarations

---

### Types vs Interfaces

TypeScript offers two main ways to describe the shape of data: <span class="codeSnip">type</span> and <span class="codeSnip">interface</span>.

Use <span class="codeSnip">type</span> when:
- You need a union or intersection
- You want to alias a primitive, array, or function signature

Use <span class="codeSnip">interface</span> when:
- You’re defining the structure of an object
- You need to extend or merge declarations

```typescript
type ID = string | number;

interface User {
  name: string;
  age: number;
}
```

---

### Extending Interfaces

You can build on existing interfaces using the <span class="codeSnip">extends</span> keyword. This allows you to create more specific or reusable types by inheriting properties.

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Labrador"
};
```

🧠 This pattern is useful for modeling real-world hierarchies or adding extra context to shared base types.

You can also extend multiple interfaces using a comma-separated list:

```typescript
interface Swimmer {
  swim(): void;
}

interface Flyer {
  fly(): void;
}

interface Duck extends Swimmer, Flyer {}

const donald: Duck = {
  swim: () => console.log("splash"),
  fly: () => console.log("flap")
};
```

This allows you to compose behavior in a clean and maintainable way.

---

### Merging Interfaces

Interfaces with the same name in the same scope are automatically merged:

```typescript
interface Person {
  firstName: string;
}

interface Person {
  lastName: string;
}

const example: Person = {
  firstName: "Ada",
  lastName: "Lovelace"
};
```

This is **not** possible with <span class="codeSnip">type</span> aliases, which must be uniquely named.

---

### Index Signatures

Use index signatures when you don’t know all the keys up front, but you do know the shape of their values.

```typescript
interface Dictionary {
  [key: string]: string;
}

const config: Dictionary = {
  theme: "dark",
  language: "en"
};
```

🧠 Index signatures are useful for configuration objects, form field maps, and dynamic props.

---

### Declaring Global Types (.d.ts Files)

Declaration files help you define reusable or ambient types for your project. These use the <span class="codeSnip">.d.ts</span> file extension.

```typescript
// globals.d.ts
declare interface Window {
  analytics?: () => void;
}
```

Use the <span class="codeSnip">declare</span> keyword to indicate that the type is defined externally (e.g., on <span class="codeSnip">window</span> or in a third-party lib). These files are automatically picked up by the TypeScript compiler if placed inside your project.

---

### Dynamic Key Mapping & Fallback Handling

You can create dynamic property access patterns using TypeScript:

```ts
const dynamicKey = `${car.Brand.toLowerCase().replace(/\s+/g, "-")}-${car.Model.toLowerCase().replace(/\s+/g, "-")}`;

return DynamicImageKeys[dynamicKey] && Images[DynamicImageKeys[dynamicKey]]
  ? Images[DynamicImageKeys[dynamicKey]]
  : Images["placeholder"];
```

🧠 This is useful when generating keys for objects like image maps, configuration sets, or dynamic routes.

To make this type-safe, use an interface to define the value structure:

```ts
interface ImageMapping {
  [key: string]: string;
}

const Images: ImageMapping = {
  placeholder: "path/to/placeholder.png"
};
```

This ensures safe access with a fallback strategy when a key might not exist.

---

### Summary

- ✅ Use <span class="codeSnip">interface</span> for object structure and <span class="codeSnip">type</span> for flexibility
- 📚 Use index signatures and dynamic keys when shape is unknown
- 🌐 Place global declarations in <span class="codeSnip">.d.ts</span> files for reuse
- 🧩 Use <span class="codeSnip">declare</span> to define ambient modules and types

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/basics/types/core">← Back</a>
    <div class="xrefTitle">TypeScript Types → Core Types</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/intermediate/functions/typing">Next →</a>
    <div class="xrefTitle">TypeScript Intermediate → Typing Functions</div>
  </div>
</div>