# Setup & Configuration

---

## Before You Begin

If you haven’t set up a React project yet, refer to the setup instructions under:

➡️ <span class="emphasis">React → Basics → Fundamentals → Setup & Installation</span>

That guide walks through creating a React project using Vite or Create React App (CRA). This file focuses only on what’s specific to **TypeScript** setup and configuration.

---

## Creating a React + TypeScript Project

When following the base setup:

- If using **Vite**, choose the <span class="emphasis">React + TypeScript</span> template during scaffolding.
- If using **Create React App**, use this command:

```shell
npx create-react-app my-app --template typescript
```

---

## Installing React Type Definitions (if not preinstalled)

If your setup didn’t include type definitions automatically (e.g., converting an existing JS project to TS), install them manually:

```shell
npm install --save-dev @types/react @types/react-dom
```

---

## Enabling Strict Mode in TypeScript

To enable more thorough type-checking, update your <span class="codeSnip">tsconfig.json</span> with the following:

```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "node"
  }
}
```

Strict mode enables a combination of rules such as <span class="codeSnip">noImplicitAny</span>, <span class="codeSnip">strictNullChecks</span>, and <span class="codeSnip">alwaysStrict</span>, which help catch more errors during development.