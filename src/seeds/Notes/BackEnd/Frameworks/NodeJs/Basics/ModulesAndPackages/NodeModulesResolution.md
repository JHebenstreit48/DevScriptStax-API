## node_modules & Module Resolution

---
### Overview
---

Node.js uses a module resolution system to determine how files and packages are located and loaded.

Understanding how Node resolves modules helps avoid import issues and improves project structure.

---
### Types of Modules
---

Node.js supports several types of modules:

- **Built-in modules**
  Examples include:
  - fs
  - http
  - path

- **User-defined modules**
  Files created within your project.

- **Third-party modules**
  Installed from npm and stored in the node_modules directory.

---

### Relative Import Paths

Node.js supports relative paths when importing local files:

- ./   current directory
- ../  parent directory
- ../../ multiple levels up

Relative paths work well in small projects but can become difficult to manage as projects grow.

---

### Problems with Deep Relative Paths

Deeply nested paths can:

- Reduce readability
- Make refactoring harder
- Increase the chance of incorrect imports

---

### Path Aliases

Path aliases provide an alternative to deep relative paths.

They allow imports to reference a known root location instead of navigating directories.

Benefits include:

- Cleaner import statements
- Easier refactoring
- Improved readability

---

### Using module-alias

Node.js does not natively support path aliases, but packages such as module-alias can provide this functionality.

Aliases are typically configured in package.json and allow simplified imports throughout a project.

---

### Summary

Module resolution determines how Node finds and loads files.
Understanding relative paths, node_modules, and aliases is essential for maintaining scalable Node.js projects.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/modules-packages/lockfiles-npm">← Back</a>
    <div class="xrefTitle">Lockfiles (npm)</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/tooling/npm-npx">Next →</a>
    <div class="xrefTitle">Tooling</div>
  </div>
</div>