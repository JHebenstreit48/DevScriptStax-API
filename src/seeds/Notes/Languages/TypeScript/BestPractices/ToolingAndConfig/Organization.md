## Organization

---

### Environment Variables in Vite Projects

When using TypeScript in frontend frameworks like React or Vue with Vite, all environment variables that should be exposed to your code must be prefixed with <span class="codeSnip">VITE_</span>.

```dotenv
VITE_API_URL=https://example.com/api
```

Without this prefix, Vite will ignore the variable at build time.

In TypeScript, you can access these using:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

To type it properly, add or modify your <span class="codeSnip">vite-env.d.ts</span> file:

```typescript
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

This ensures full IntelliSense and type safety when accessing environment-specific data.

---

### Future Organization Tips

As your project grows, consider the following best practices:

- ✅ Use <span class="codeSnip">baseUrl</span> and <span class="codeSnip">paths</span> in <span class="codeSnip">tsconfig.json</span> to simplify imports
- ✅ Group related types, utils, and services by domain or feature
- ✅ Place declaration files like <span class="codeSnip">vite-env.d.ts</span> in a central <span class="codeSnip">types</span> or <span class="codeSnip">env</span> folder

These practices improve long-term maintainability and reduce import path confusion.

---

### Summary

- 🔐 Prefix exposed variables with <span class="codeSnip">VITE_</span> to use them in Vite projects
- 🔎 Use <span class="codeSnip">import.meta.env</span> and augment types as needed
- 🗂️ Keep structure predictable — scalable code starts with clean folders
