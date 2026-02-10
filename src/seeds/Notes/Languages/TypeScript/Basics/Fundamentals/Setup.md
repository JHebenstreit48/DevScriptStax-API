## TypeScript Setup

---

### Overview
---

Before writing TypeScript, you need to install the compiler and configure your project so TypeScript knows **how** to check and compile your code.

TypeScript works by:
- analyzing your <span class="codeSnip">.ts</span> files
- reporting type errors during development
- compiling TypeScript into plain JavaScript

---

### Installing TypeScript
---

TypeScript is installed using npm.

See: <a class="emphasis" href="/frameworks/nodejs/basics/tooling/npm-npx">NodeJs Tooling → Npm & Npx</a>

Global install (recommended for tooling access):

shell
npm install -g typescript

Verify installation:

shell
tsc -v

This prints the installed TypeScript version.

---

### Local vs Global Installation
---

You can install TypeScript **globally** or **locally per project**.

**Global install**:
- Makes the <span class="codeSnip">tsc</span> command available anywhere
- Useful for learning, small scripts, or tooling

**Local install** (recommended for real projects):

shell
npm install --save-dev typescript

This helps ensure:
- consistent TypeScript versions across teams
- predictable builds in CI/CD environments

---

### Initializing a TypeScript Project
---

To generate a default TypeScript configuration file, run:

shell
tsc --init

This creates a <span class="codeSnip">tsconfig.json</span> file in your project root.

This file controls:
- compiler behavior
- strictness rules
- module resolution
- output targets

(You’ll explore this in detail in the <span class="emphasis">TSConfig</span> section.)

---

### Basic Project Example
---

Minimal project structure:

md
project/
- src/
  - index.ts
- tsconfig.json
- package.json

Example <span class="codeSnip">src/index.ts</span>:

ts
const message: string = "Hello TypeScript"
console.log(message)

Compile the project:

shell
tsc

This outputs JavaScript files based on your <span class="codeSnip">tsconfig.json</span> settings.

---

### Running TypeScript Code
---

TypeScript does not run directly in Node.js or the browser.

You must either:
- compile to JavaScript with <span class="codeSnip">tsc</span>
- or use a runtime tool like <span class="codeSnip">ts-node</span> (optional)

Example compile + run:

shell
tsc src/index.ts
node src/index.js

---

### Editor Support (Important)
---

TypeScript works best with editor integration.

Recommended editors:
- VS Code (best support out of the box)
- WebStorm
- Vim / Neovim with TypeScript plugins

Benefits:
- inline type errors
- autocomplete & IntelliSense
- hover documentation
- safer refactoring

---

### Summary
---

- Install TypeScript with npm
- Use <span class="codeSnip">tsc --init</span> to generate <span class="codeSnip">tsconfig.json</span>
- Write <span class="codeSnip">.ts</span> files and compile to JavaScript
- TypeScript checks code before runtime
- Editor integration is a major productivity boost

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">TypeScript Fundamentals → Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/typescript/basics/fundamentals/tsconfig">Next →</a>
    <div class="xrefTitle">TypeScript Fundamentals → TSConfig</div>
  </div>
</div>