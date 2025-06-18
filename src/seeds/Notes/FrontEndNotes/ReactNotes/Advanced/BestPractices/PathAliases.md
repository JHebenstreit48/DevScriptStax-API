# Path Aliases

---

## 🧭 What Are Path Aliases?

Path aliases let you simplify and shorten import statements by replacing long relative paths with cleaner, custom identifiers.

- Instead of using <span class="codeSnip">../../components/Button</span>
- You can write <span class="codeSnip">@/components/Button</span>

This helps:
- Reduce clutter
- Improve readability
- Ease refactoring as your app grows

---

## ⚙️ Setting Up Aliases with Vite

To configure path aliases in a Vite-powered React project:

### 1. Install <span class="codeSnip">path</span> (usually pre-installed with Node.js)

If not already available:

shell  
npm install path

### 2. Update <span class="codeSnip">vite.config.js</span>

javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

---

## 🛠️ How to Use Path Aliases

Assuming you've added <span class="codeSnip">@</span> as an alias for <span class="codeSnip">src/</span>:

### ❌ Without Alias:

<span class="codeSnip">import Button from '../../components/Button';</span>

### ✅ With Alias:

<span class="codeSnip">import Button from '@/components/Button';</span>

- Easier to follow and relocate files without breaking your imports.
- Consistent and scalable as your app structure grows.

---

## 🔍 VS Code: Enable Auto-Import Support

To get VS Code to recognize your aliases and support IntelliSense:

### Add <span class="codeSnip">jsconfig.json</span> or <span class="codeSnip">tsconfig.json</span> (depending on your project)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
