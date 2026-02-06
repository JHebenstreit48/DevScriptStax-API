## CommonJS vs ES Modules (Node)

---

### Overview

Node.js supports two module systems:

- CommonJS
- ES Modules (ESM)

Both systems allow code to be split into reusable modules, but they use different syntax and loading behavior.

---

### What Is a Module?

A module is a reusable piece of code that can be imported into other files.

In Node.js, modules can be:

- Built-in modules
- User-defined modules
- Third-party modules installed from npm

---

### CommonJS

CommonJS is the original module system used by Node.js.

- Uses require() to import modules
- Uses module.exports to export values

CommonJS modules are loaded synchronously.

---

### ES Modules (ESM)

ES Modules are the standardized JavaScript module system used by modern JavaScript.

- Uses import and export syntax
- Matches the module system used in browsers

ES Modules are loaded asynchronously.

---

### Node.js Support

Modern versions of Node.js support both CommonJS and ES Modules.

Which system is used depends on configuration such as:

- File extensions
- package.json settings

---

### Summary

Both CommonJS and ES Modules allow modular code organization in Node.js.
Understanding the differences is important when working with modern Node projects and tooling.

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