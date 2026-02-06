# Understanding TSConfig Variants

---

## What is tsconfig.json?

- This is the main configuration file for TypeScript projects.
- It controls how TypeScript compiles code, what files to include, and how strict the compiler is.

Common settings:
- <span class="codeSnip">compilerOptions</span>: Define language features, paths, and module resolution.
- <span class="codeSnip">include</span> and <span class="codeSnip">exclude</span>: Control which files are compiled.

---

## Base Example: tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

---

## tsconfig.node.json

- Used in full-stack or monorepo setups to define options specifically for Node.js files.
- Might disable features like JSX or adjust module type.

Useful when:
- Separating server-side vs client-side builds.
- Running tools like ESLint or TypeScript type-checking only on backend.

---

## Base Example: tsconfig.node.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "module": "CommonJS",
    "target": "ES2020",
    "jsx": "preserve"
  },
  "include": ["server/**/*"]
}
```

---

## tsconfig.app.json

- Targets front-end React code specifically (like CRA or custom setups).
- Often used with <span class="codeSnip">extends</span> to build on top of a shared base config (<span class="codeSnip">tsconfig.json</span>).

---

## Base Example: tsconfig.app.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["DOM", "ES2020"],
    "types": ["vite/client"]
  },
  "include": ["src"]
}
```

---

## Using Path Aliases in TSConfig

You can simplify import paths in large projects using aliases configured in your <span class="codeSnip">tsconfig.json</span>.

This is especially helpful in React projects to keep imports clean and manageable.

---

### Path Alias Example in tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

---

### Explanation

- <span class="codeSnip">baseUrl</span> sets the root for module resolution (typically the project root).
- <span class="codeSnip">paths</span> define custom alias names and their corresponding folders.
- This improves:
  - 📦 Project structure scalability
  - 🧹 Readability and clarity of imports
  - 🔁 Easier refactoring when moving files

---

## Example Project Structure

```shell
my-project/
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.app.json
├── src/
│   └── index.tsx
└── server/
    └── server.ts
```

Each config can be tailored to its context and linked via <span class="codeSnip">extends</span>.

---

## When to Split TSConfig

✅ You're building both server and client code
✅ You need different module systems (e.g., <span class="emphasis">ESNext</span> vs <span class="emphasis">CommonJS</span>)
✅ You want to avoid compiling unnecessary files (e.g., exclude frontend during backend build)

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/basics/fundamentals/setup">← Back</a>
    <div class="xrefTitle">Setup</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/basics/types/core">Next →</a>
    <div class="xrefTitle">Types</div>
  </div>
</div>