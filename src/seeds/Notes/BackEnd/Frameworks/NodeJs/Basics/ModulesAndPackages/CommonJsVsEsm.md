# CommonJS vs ES Modules

---
### Overview
---

Node.js supports two module systems:

- CommonJS
- ES Modules (ESM)

Both systems allow code to be split into reusable modules, but they use different syntax and loading behavior.

You can think of modules like labeled boxes of functionality: instead of dumping everything into one file, you package related logic and pull it in where needed.

---
### What Is a Module?
---

A module is a reusable piece of code that can be imported into other files.

In Node.js, modules can be:

- Built-in modules
- User-defined modules
- Third-party modules installed from npm

Modules help keep code organized, easier to reason about, and simpler to maintain as projects grow.

---
### CommonJS
---

CommonJS is the original module system used by Node.js.

- Uses <span class="emphasis">require()</span> to import modules
- Uses <span class="emphasis">module.exports</span> to export values

CommonJS modules are loaded synchronously, which made sense for early server-side JavaScript where files were typically loaded from disk.

---
### ES Modules (ESM)
---

ES Modules are the standardized JavaScript module system used by modern JavaScript.

- Uses <span class="emphasis">import</span> and <span class="emphasis">export</span> syntax
- Matches the module system used in browsers

ES Modules are loaded asynchronously, which aligns better with modern tooling, bundlers, and browser-based JavaScript.

---
### Node.js Support
---

Modern versions of Node.js support both CommonJS and ES Modules.

Which system is used depends on configuration such as:

- File extensions
- <span class="emphasis">package.json</span> settings

Because both systems exist side-by-side, it’s common to encounter projects that use one, the other, or a mix of both.

---
### Summary
---

Both CommonJS and ES Modules allow modular code organization in Node.js.

Understanding how they differ in syntax, loading behavior, and configuration is important when working with modern Node projects and tooling.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/fundamentals/runtime-globals">← Back</a>
    <div class="xrefTitle">Fundamentals</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/modules-packages/package-json-scripts">Next →</a>
    <div class="xrefTitle">package.json & Scripts</div>
  </div>
</div>
