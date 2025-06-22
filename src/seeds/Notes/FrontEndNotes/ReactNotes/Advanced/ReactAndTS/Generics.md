# Generics in React Functional Components

---

## What Is a React Functional Component?

- A React Functional Component is a JavaScript or TypeScript function that receives props and returns JSX.
- They're simpler and more lightweight than class components, making them ideal for modern React development.

---

## Why Use Generics in React?

Generics enable you to create **reusable** and **type-safe** components that can adapt to a variety of data structures.

### Benefits

- 🔁 Work with different data types while maintaining type safety.
- 🧩 Build flexible and scalable component APIs.
- ✅ Improve developer confidence with better IntelliSense and type checking.

---

## Using Generics in Functional Components
  
```ts
interface ListProps<T> {
  items: T[];
  render: (item: T) => JSX.Element;
}

const List = <T,>({ items, render }: ListProps<T>) => (
  <ul>{items.map(render)}</ul>
);
```

✅ This generic component can handle lists of any type (`T`), rendering each item through a customizable render function.

---

## Best Practices

- Use generics **only when necessary** — don’t over-engineer.
- Clearly name generic parameters (`T`, `U`, `K`, etc.) if there are multiple.
- Keep the implementation intuitive and document usage with examples.

---

## Summary

- Generics empower you to build flexible, reusable components in React + TypeScript.
- They are especially useful for props like render functions or deeply nested object structures.
- Start simple, and introduce generics as your component complexity grows.
