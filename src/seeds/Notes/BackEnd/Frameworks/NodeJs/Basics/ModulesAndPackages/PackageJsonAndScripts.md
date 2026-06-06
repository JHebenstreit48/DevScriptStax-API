# What Is package.json?

<hr class="dividerSection" />

<span class="emphasis">package.json</span> is a metadata file that describes a Node.js project. You can think of it like a <span class="emphasis">grocery list</span> or <span class="emphasis">recipe list</span> — it keeps track of all the ingredients (packages and scripts) your application needs in order to run.

It defines:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Project information</li>
    <li>Dependencies</li>
    <li>Scripts</li>
    <li>Configuration settings</li>
  </ul>
</div>

<hr class="dividerSection" />

## Creating package.json

<hr class="dividerSection" />

You can quickly generate a default <span class="emphasis">package.json</span> file using:

```shell
npm init -y
```

This creates a ready-to-use file with sensible defaults that you can customize later.

<hr class="dividerSection" />

## Dependencies

<hr class="dividerSection" />

When packages are installed, they are recorded in <span class="emphasis">package.json</span>.

Common sections include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">dependencies</span> — required at runtime.</li>
    <li><span class="emphasis">devDependencies</span> — used only during development.</li>
  </ul>
</div>

This allows others to install the same dependencies using the full command:

```shell
npm install
```

Or the shorthand version:

```shell
npm i
```

Both commands do the same thing:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Install all dependencies listed in <span class="emphasis">package.json</span>.</li>
    <li>Use the lockfile (if present) to install exact versions.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Scripts Section

<hr class="dividerSection" />

The <span class="emphasis">scripts</span> section of <span class="emphasis">package.json</span> is where you define custom commands for a project.  
Scripts act like shortcuts for longer terminal commands and help standardize how a project is run.

```js
"scripts": {
  "start": "node server.js",
  "watch": "nodemon server.js"
}
```

<hr class="dividerSection" />

## Running Scripts

<hr class="dividerSection" />

Scripts are executed using <span class="emphasis">npm run</span> followed by the script name.

For example, if you define a script called <span class="emphasis">watch</span>, you can run it with:

```shell
npm run watch
```

As long as <span class="emphasis">node</span> or <span class="emphasis">nodemon</span> is pointing to the correct file, the script will start your server.

<hr class="dividerSection" />

## nodemon

<hr class="dividerSection" />

<span class="emphasis">nodemon</span> is a development tool that automatically restarts a Node.js application whenever it detects a file change. Install it using:

```shell
npm install nodemon
```

Or shorthand:

```shell
npm i nodemon
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Installed as a dev dependency.</li>
    <li>Used during development only — not required in production.</li>
    <li>Removes the need to manually restart the server after every change.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">package.json</span> defines how a Node.js project works.</li>
    <li>Dependencies and scripts are centralized in one place.</li>
    <li>Scripts simplify and standardize common commands.</li>
    <li><span class="emphasis">nodemon</span> improves developer workflow during development by auto-restarting on file changes.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/modules-packages/commonjs-vs-esm">← Back</a>
    <div class="xrefTitle">Node.js → Modules & Packages → CommonJS vs ESM</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/modules-packages/lockfiles-npm">Next →</a>
    <div class="xrefTitle">Node.js → Modules & Packages → Lockfiles (npm)</div>
  </div>
</div>