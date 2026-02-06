# npm & npx

---
### Overview
---

Node.js includes two closely related tools:

- <span class="emphasis">npm</span> (Node Package Manager)
- <span class="emphasis">npx</span> (Node Package Execute)

npm is used to install, manage, and run packages.
npx is used to run packages directly, often without installing them first.

Together, they form the core tooling for managing dependencies and workflows in Node.js projects.

---
### What npm Is
---

In any npm command, <span class="emphasis">npm</span> stands for <span class="emphasis">Node Package Manager</span>.

You can think of npm as a giant <span class="secondEmphasis">grocery store</span> of prewritten JavaScript goodies that you can use in your servers.

Instead of writing everything from scratch, npm lets you install packages that already solve common problems.

---
### Installing Packages
---

When you install a package, npm downloads it into a folder called <span class="emphasis">node_modules</span>.

There are two equivalent ways to install packages using npm.

Full command:

```shell
npm install
```

Shorthand version:

```shell
npm i
```

Both commands perform the same action and are commonly used interchangeably.

---
### Installing a Specific Package
---

To install a package locally in a project:

```shell
npm install package-name
```

Example:

```shell
npm install module-alias --save
```

This adds the package to the project dependencies.

When you install something like Express, you will see many other folders appear inside <span class="emphasis">node_modules</span> because Express depends on other packages that are installed alongside it.

---
### Development Tools (nodemon)
---

If you run:

```shell
npm install nodemon
```

(or <span class="emphasis">npm i nodemon</span> for short)

<span class="emphasis">nodemon</span> will automatically relaunch your Node application anytime it detects a file change.

This makes it a popular development-only tool.

---
### What Is npx?
---

<span class="emphasis">npx</span> allows you to run packages without installing them globally.

You can think of npx as a way to “borrow” a tool, run it once, and move on—without adding it permanently to your system or project.

npx is commonly used for:

- Running project tools
- Executing one-off commands
- Avoiding global installs

---
### Running Node Directly (No npm)
---

You can also run a Node file directly without using npm:

```shell
node app.js
```

This executes the file immediately using the Node runtime.

---
### Summary
---

- <span class="emphasis">npm</span> is used to install, manage, and run packages
- npm acts like a grocery store for reusable JavaScript tools
- <span class="emphasis">npm install</span> is the full command, and <span class="emphasis">npm i</span> is the shorthand
- <span class="emphasis">npx</span> allows running packages without installing them globally
- Together, npm and npx support modern Node.js development workflows
