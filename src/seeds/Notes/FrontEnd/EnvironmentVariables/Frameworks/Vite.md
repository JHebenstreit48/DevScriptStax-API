# Vite

---

## Basics

<span class="emphasis">Vite</span> only exposes environment variables prefixed with <span class="codeSnip">VITE_</span> to client-side code.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Prefix</th>
      <th class="tableCellHeader">Client Access</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="codeSnip">VITE_API_URL</span></td>
      <td>✅ Accessible via <span class="codeSnip">import.meta.env.VITE_API_URL</span></td>
    </tr>
    <tr>
      <td><span class="codeSnip">API_SECRET</span></td>
      <td>❌ Not available to client code</td>
    </tr>
  </tbody>
</table>

✅ Use <span class="codeSnip">VITE_</span> prefix for any environment variable that must be accessed in the browser.

---

## Loading Order & Modes

Vite automatically loads <span class="emphasis">.env</span> files depending on the mode you run:

- <span class="codeSnip">.env</span> → always loaded  
- <span class="codeSnip">.env.local</span> → local overrides, ignored by Git  
- <span class="codeSnip">.env.development</span> → loaded in dev mode  
- <span class="codeSnip">.env.production</span> → loaded during build  
- <span class="codeSnip">.env.[mode].local</span> → local overrides per mode

▶ Example:

If you run <span class="codeSnip">vite build --mode staging</span>, it loads:
- <span class="codeSnip">.env</span>
- <span class="codeSnip">.env.staging</span>
- <span class="codeSnip">.env.staging.local</span>

---

## Variable Expansion

Vite uses <span class="codeSnip">dotenv-expand</span> to support referencing other variables:

```dotenv
VITE_DOMAIN=https://example.com  
VITE_API_URL=${VITE_DOMAIN}/api  
```
Access in code:

```js
console.log(import.meta.env.VITE_API_URL); // https://example.com/api
```
---

## Access in Code

Use <span class="codeSnip">import.meta.env</span> to read environment variables:

```js
console.log(import.meta.env.VITE_API_URL);  
console.log(import.meta.env.MODE);          // current mode  
console.log(import.meta.env.PROD);          // true if production  
```

---

## Access in Vite Config

You can access environment variables in <span class="codeSnip">vite.config.ts</span> using <span class="codeSnip">loadEnv</span>:

```js
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL)
    }
  });
};
```

Then use <span class="codeSnip">__API_URL__</span> in your source code like any global.

---

## TypeScript Support

To get IntelliSense for your custom env vars, extend the built-in typing:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

Put this in a file like <span class="codeSnip">vite-env.d.ts</span> inside your <span class="codeSnip">src/</span> folder.

---

## Security Tips

✅ Anything prefixed with <span class="codeSnip">VITE_</span> is visible to client-side code.  
❌ Never include secrets or private keys.  
✅ Use <span class="codeSnip">.env.local</span> and <span class="codeSnip">.env.production.local</span> for sensitive machine-specific values.  
✅ Always add <span class="codeSnip">*.local</span> to <span class="codeSnip">.gitignore</span>.

---

## Summary

✅ Only use <span class="codeSnip">VITE_</span> for variables you want in the browser.  
✅ Use <span class="codeSnip">loadEnv</span> in your config if needed.  
✅ Type your <span class="codeSnip">import.meta.env</span> with a custom interface.  
✅ Separate sensitive values into local-only files.

