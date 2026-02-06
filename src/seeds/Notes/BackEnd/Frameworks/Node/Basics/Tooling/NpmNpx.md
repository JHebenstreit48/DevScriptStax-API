# npm & npx


---
### What npm Is
---

In any npm command, <span class="emphasis">npm</span> stands for <span class="emphasis">Node Package Manager</span>.

You can think of npm as a giant grocery store of prewritten JavaScript goodies that we can leverage in our servers.

Instead of writing everything from scratch, npm lets you install packages that already solve common problems.

---
### Installing Packages
---

When you install a package, npm downloads it into a folder called <span class="emphasis">node_modules</span>.

There are two ways to start installing npm into a project via the CLI

Full command

```shell
npm install
```

Shorthand version

```shell
npm i
```

Example:

```shell
npm install module-alias --save
```

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

---
### Running Node Directly
---

You can also run a Node file directly without npm:

```shell
node app.js
```