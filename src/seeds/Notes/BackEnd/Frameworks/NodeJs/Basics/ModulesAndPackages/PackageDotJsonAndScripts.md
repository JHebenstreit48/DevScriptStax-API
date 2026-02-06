## package.json & Scripts

---

### What Is package.json?
---

<span class="emphasis">package.json</span> is a metadata file that describes a Node.js project.

It defines:
- Project information
- Dependencies
- Scripts
- Configuration settings

---

### Creating package.json
---

To generate a default file quickly:

```shell
npm init -y
```

This creates a ready-to-use <span class="codeSnip">package.json</span> with sensible defaults.

---

### Dependencies
---

When packages are installed, they are recorded in <span class="codeSnip">package.json</span>.

- <span class="codeSnip">dependencies</span> → required at runtime
- <span class="codeSnip">devDependencies</span> → used only during development

This allows others to install the same dependencies using:

```shell
npm install
```

or 

```shell
npm i
```

Both commands do the same thing:
- Install all dependencies listed in <span class="codeSnip">package.json</span>
- Use the lockfile (if present) to install exact versions

---
### Scripts Section
---

The <span class="codeSnip">scripts</span> section defines custom commands you can run from the terminal.

Example:

```json
"scripts": {
  "start": "node server.js",
  "watch": "nodemon server.js"
}
```

Scripts are run using:

```shell
npm run start
npm run watch
```

---
### nodemon (Development Tool)
---

<span class="emphasis">nodemon</span> automatically restarts a Node application when files change.

- Installed as a dev dependency
- Used during development only
- Not required in production

---

### Helpful Analogy
---

You can think of <span class="codeSnip">package.json</span> like a <span class="secondEmphasis">grocery list</span> or <span class="secondEmphasis">recipe list</span>:
it keeps track of the “ingredients” your project needs to run.

---

### Summary
---

- <span class="codeSnip">package.json</span> defines how a Node project works
- Dependencies and scripts are centralized here
- Scripts simplify common commands
- <span class="codeSnip">nodemon</span> improves developer workflow

---
