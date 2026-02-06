# package.json & Scripts

---
### What Is package.json?
---

<span class="emphasis">package.json</span> is a metadata file that describes a Node.js project.

It defines:
- Project information
- Dependencies
- Scripts
- Configuration settings

You can think of <span class="emphasis">package.json</span> like a **grocery list** or **recipe list**:
it keeps track of all the “ingredients” (packages and scripts) your application needs in order to run.

---
### Creating package.json
---

You can quickly generate a default <span class="emphasis">package.json</span> file using:

```shell
npm init -y
```

This creates a ready-to-use file with sensible defaults that you can customize later.

---
### Dependencies
---

When packages are installed, they are recorded in <span class="emphasis">package.json</span>.

Common sections include:

- <span class="emphasis">dependencies</span> → required at runtime
- <span class="emphasis">devDependencies</span> → used only during development

This allows others to install the same dependencies using:

Full Command:

```shell
npm install
```

or:

Shorthand version:

```shell
npm i
```

Both commands do the same thing:
- Install all dependencies listed in <span class="emphasis">package.json</span>
- Use the lockfile (if present) to install exact versions

---
### Scripts Section
---

The <span class="emphasis">scripts</span> section of <span class="emphasis">package.json</span> is where you define custom commands for a project.

Scripts act like shortcuts for longer terminal commands and help standardize how a project is run.

Example:

```json
"scripts": {
  "start": "node server.js",
  "watch": "nodemon server.js"
}
```

---
### Running Scripts
---

Scripts are executed using <span class="emphasis">npm run</span> followed by the script name.

For example, if you define a script called <span class="emphasis">watch</span>, you can run it with:

```shell
npm run watch
```

As long as <span class="emphasis">node</span> or <span class="emphasis">nodemon</span> is pointing to the correct file, the script will start your server.

---
### nodemon (Development Tool)
---

<span class="emphasis">nodemon</span> is a development tool that automatically restarts a Node.js application when files change.

- Installed as a dev dependency
- Used during development only
- Not required in production

This helps speed up development by removing the need to manually restart the server after every change.

---
### Summary
---

- <span class="emphasis">package.json</span> defines how a Node.js project works
- Dependencies and scripts are centralized in one place
- Scripts simplify and standardize common commands
- <span class="emphasis">nodemon</span> improves developer workflow during development
