# node_modules & Resolution


---
### Relative Import Paths
---

Node.js supports relative paths for importing modules or files, such as <span class="emphasis">./</span>, <span class="emphasis">../</span>, and <span class="emphasis">../../</span>. These paths work well for small projects but can become cumbersome in larger ones.

---
### Path Aliases (module-alias)
---

To simplify imports, aliases like <span class="emphasis">@/</span> can be configured using tools such as <span class="emphasis">module-alias</span>.

<div class="fullWidthBullet">

🔹 Cleaner and more readable import statements  
🔹 Easier refactoring when moving files  

</div>

---
### Steps to Configure
---

1. Install:

shell
npm install module-alias --save

2. Add configuration to package.json:

json
{
  "_moduleAliases": {
    "@": "src"
  }
}

3. Use the alias in code:

javascript
require('@utils/MyModule');

---
### Example: Relative Path
---

javascript
const MyModule = require('../../utils/MyModule');

---
### Example: Using Alias
---

javascript
const MyModule = require('@/utils/MyModule');

---
### Additional Notes
---

<div class="fullWidthBullet">

🔹 In ES Module projects, aliases may require custom loaders or configurations using <span class="emphasis">NODE_OPTIONS</span>  
🔹 Aliases are especially useful for managing shared utilities or deeply nested directories in larger applications  

</div>
