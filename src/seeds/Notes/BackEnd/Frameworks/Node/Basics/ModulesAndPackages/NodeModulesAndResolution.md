# node_modules & Resolution


---
### Relative Import Paths
---

Node.js supports relative paths for importing modules or files, such as <span class="emphasis">./</span>, <span class="emphasis">../</span>, and <span class="emphasis">../../</span>.

These paths work well for small projects but can become cumbersome as folder depth increases.

---
### node_modules Folder
---

When you install packages using npm, they are stored inside the <span class="emphasis">node_modules</span> folder.

If a package depends on other packages, those dependencies are installed automatically.

This is why installing a single package can result in many folders being added.

---
### Path Aliases (module-alias)
---

Node.js does not natively support path aliases, but the <span class="emphasis">module-alias</span> package provides a way to configure them.

Aliases help reduce long relative paths and make imports easier to read and maintain.

---
### Steps to Configure
---

1. Install the package:

```shell
npm install module-alias --save
```

2. Add configuration to <span class="emphasis">package.json</span>:

```json
{
  "_moduleAliases": {
    "@": "src"
  }
}
```

3. Use the alias in code:

```js
require('@utils/MyModule');
```

---
### Example: Relative Path
---

```js
const MyModule = require('../../utils/MyModule');
```

---
### Example: Using Alias
---

```js
const MyModule = require('@/utils/MyModule');
```