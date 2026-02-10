## Linting, Strict Mode & Pitfalls

---

### Enabling Strict Mode in TypeScript

To enable stricter type-checking during development, update your <span class="codeSnip">tsconfig.json</span> with the following configuration:

```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "node"
  }
}
```

Enabling <span class="codeSnip">strict</span> automatically turns on several type enforcement rules:

- <span class="codeSnip">noImplicitAny</span> – disallows variables with an implicit <span class="codeSnip">any</span> type
- <span class="codeSnip">strictNullChecks</span> – prevents assigning <span class="codeSnip">null</span> or <span class="codeSnip">undefined</span> to a value unless explicitly allowed
- <span class="codeSnip">alwaysStrict</span> – ensures every file is parsed in strict mode

Strict mode is highly recommended for production projects as it surfaces bugs early and improves long-term maintainability.

---

### Linting Tip: Avoid Interface Collisions

TypeScript allows multiple interfaces with the same name to be merged automatically. While useful for extending types, it can also introduce accidental overwrites and confusion.

Most linting tools support a rule to catch unintentional collisions:

```shell
no-redeclare
```

This rule helps prevent issues like:

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// TypeScript merges them automatically, but this might be accidental.
```

Use this lint rule to enforce consistency and avoid subtle bugs in shared codebases.

---

### Best Practice Summary

- ✅ Always enable <span class="codeSnip">strict</span> in serious projects
- 🛡️ Combine TypeScript compiler rules with a linter (e.g., ESLint)
- ⚠️ Watch for silent merging of interfaces—use <span class="codeSnip">no-redeclare</span> to stay safe

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/advanced/best-practices/tooling/organization">← Back</a>
    <div class="xrefTitle">TypeScript Best Practices → Organization</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/advanced/best-practices/patterns/naming-conventions">Next →</a>
    <div class="xrefTitle">TypeScript Patterns → Naming & Conventions</div>
  </div>
</div>