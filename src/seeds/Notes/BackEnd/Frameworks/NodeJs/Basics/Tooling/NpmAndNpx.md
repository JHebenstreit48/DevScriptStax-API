## npm & npx Basics

---

### Overview

Node.js includes npm (Node Package Manager), which is used to install, manage, and run packages.

npx is a companion tool that allows running packages without installing them globally.

---

### Installing Node.js

To use npm or npx, Node.js must be installed on your system.

After installation, you can verify that Node is installed by running:

```shell
node -v
```

This command outputs the installed Node.js version.

---

### What Is npm?

npm is used to:

- Install third-party packages
- Manage dependencies
- Run scripts defined in package.json

Packages installed with npm are typically stored in the node_modules directory.

---

### Installing Packages

To install a package locally in a project:

```shell
npm install package-name
```

Example:

```shell
npm install module-alias --save
```

This adds the package to the project dependencies.

---

### What Is npx?

npx allows you to run packages without installing them globally.

It is commonly used for:

- Running project tools
- Executing one-off commands
- Avoiding global installs

---

### Additional Notes and Best Practices

- Use async/await or Promises for asynchronous code
- Handle errors using try/catch or Promise error handling
- Use environment variables for configuration
- Avoid committing sensitive values to source control

---

### Summary

npm and npx provide the tooling needed to manage dependencies and execute Node-based workflows efficiently.
