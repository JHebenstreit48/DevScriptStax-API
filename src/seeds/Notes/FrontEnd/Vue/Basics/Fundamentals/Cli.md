# Vue CLI

---
### Overview
---

To start a Vue project quickly, you typically use a scaffolding tool such as:

- <span class="emphasis">Vite</span> (modern, fast default for most projects)
- <span class="emphasis">Vue CLI</span> (older workflow, still useful in some cases)

Both create a project structure, install core dependencies, and provide a development server.

---
### Why Use Vite or Vue CLI?
---

Both tools provide a solid foundation for Vue projects, but they have different strengths.

---
### Vite
---

- Fast development server with modern tooling
- Minimal configuration needed
- Great for small to medium projects that value speed and simplicity

---
### Vue CLI
---

- Plugin-based setup (easy add-ons like Router / state tools depending on setup)
- More configuration options for complex projects
- Can be useful for legacy tooling needs in older codebases

---
### Create a Vue App With Vite
---

1. Create the project:

```shell
npm create vite@latest . -- --template vue
```

2. Install dependencies:

```shell
npm install
```

Shorthand version:

```shell
npm i
```

3. Start the dev server:

```shell
npm run dev
```

---
### Create a Vue App With Vue CLI
---

1. Install Vue CLI globally:

```shell
npm install -g @vue/cli
```

2. Initialize the project:

```shell
vue create .
```

3. Start the development server:

```shell
npm run serve
```

---
### Example Project Structure
---

A typical Vue project structure looks like this:

```perl
my-vue-app/
├── public/                 # Static files
├── src/                    # Main application source code
│   ├── components/         # Vue components
│   ├── App.vue             # Root Vue component
│   ├── main.js             # Entry point
├── package.json            # Project metadata
├── vite.config.js          # Configuration file (for Vite)
└── README.md               # Project documentation
```

---
### Path Imports in Vue
---

Vue projects commonly use relative imports like:

- <span class="emphasis">./</span>
- <span class="emphasis">../</span>

Relative paths work fine at first but become harder to read as folder depth increases.

Path aliases provide a cleaner approach, especially in larger projects.

---
### Configuring Path Aliases With Vite
---

In many Vite-based Vue projects, the <span class="emphasis">@</span> alias is used to point to <span class="emphasis">src</span>, so imports stay clean and consistent.

Example configuration in <span class="emphasis">vite.config.js</span>:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

---
### Example: Relative Path vs Alias
---

Without alias (relative path):

```js
import MyComponent from '../../components/MyComponent.vue'
```

With alias:

```js
import MyComponent from '@/components/MyComponent.vue'
```

---
### Summary
---

- Vite and Vue CLI both scaffold Vue projects, but Vite is the modern default
- Vite uses <span class="emphasis">npm run dev</span> while Vue CLI commonly uses <span class="emphasis">npm run serve</span>
- Path aliases like <span class="emphasis">@/</span> reduce deep relative imports and simplify refactoring
