# npm & npx

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Node.js includes two closely related tools:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">npm</span> (Node Package Manager)</li>
    <li><span class="emphasis">npx</span> (Node Package Execute)</li>
  </ul>
</div>

npm is used to install, manage, and run packages.

npx is used to run packages directly, often without installing them first.

Together, they form the core tooling for managing dependencies and workflows in Node.js projects.

<hr class="dividerSection" />

## What npm Is

<hr class="dividerSection" />

In any npm command, <span class="emphasis">npm</span> stands for <span class="emphasis">Node Package Manager</span>.

You can think of npm as a giant <span class="emphasis">grocery store</span> of prewritten JavaScript goodies that you can use in your servers.

Instead of writing everything from scratch, npm lets you install packages that already solve common problems.

<hr class="dividerSection" />

## Installing Packages

<hr class="dividerSection" />

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

<hr class="dividerSection" />

## Installing a Specific Package

<hr class="dividerSection" />

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

<hr class="dividerSection" />

## Development Tools (nodemon)

<hr class="dividerSection" />

If you run:

```shell
npm install nodemon
```

Or the shorthand version:

```shell
npm i nodemon
```

<span class="emphasis">nodemon</span> will automatically relaunch your Node application anytime it detects a file change.

This makes it a popular development-only tool.

<hr class="dividerSection" />

## What Is npx?

<hr class="dividerSection" />

<span class="emphasis">npx</span> allows you to run packages without installing them globally.

You can think of npx as a way to borrow a tool, run it once, and move on — without adding it permanently to your system or project.

npx is commonly used for:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Running project tools</li>
    <li>Executing one-off commands</li>
    <li>Avoiding global installs</li>
  </ul>
</div>

<hr class="dividerSection" />

## Running Node Directly (No npm)

<hr class="dividerSection" />

You can also run a Node file directly without using npm:

```shell
node app.js
```

This executes the file immediately using the Node runtime.

<hr class="dividerSection" />

## Handling User Input with Inquirer

<hr class="dividerSection" />

<span class="emphasis">Inquirer</span> is an npm package used to prompt users for input directly in the terminal.

It is commonly used in CLI tools and Node.js scripts that require interactive input.

```shell
npm install inquirer
```

```js
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'userName',
      message: 'What is your name?',
    },
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.userName}!`);
  })
  .catch((error) => {
    console.error(error);
  });
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">inquirer.prompt()</span> takes an array of question objects and waits for user input.</li>
    <li>The <span class="codeSnip">name</span> property defines the key used to access the answer.</li>
    <li><span class="codeSnip">.then()</span> receives the answers object once the user responds.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">npm</span> is used to install, manage, and run packages.</li>
    <li>npm acts like a grocery store for reusable JavaScript tools.</li>
    <li><span class="codeSnip">npm install</span> is the full command and <span class="codeSnip">npm i</span> is the shorthand.</li>
    <li><span class="emphasis">npx</span> allows running packages without installing them globally.</li>
    <li><span class="emphasis">nodemon</span> automatically restarts a Node app when file changes are detected.</li>
    <li><span class="emphasis">Inquirer</span> enables interactive terminal prompts for collecting user input.</li>
    <li>Together, npm and npx support modern Node.js development workflows.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/modules-packages/node-modules-resolution">← Back</a>
    <div class="xrefTitle">Section: Node.js → Modules & Packages → node_modules & Resolution</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/tooling/nvm-versions">Next →</a>
    <div class="xrefTitle">Node.js → Tooling → Node Versions (nvm)</div>
  </div>
</div>