# Project Structure

---

## Overview

When you create a React project (with tools like Vite or Create React App), the default folder structure helps organize code efficiently.

Understanding this structure improves maintainability and teamwork.

---

## Root Directory

- <span class="codeSnip">node_modules</span>  
  Contains all installed dependencies. Managed by your package manager (e.g., npm or Yarn).

- <span class="codeSnip">package.json</span>  
  Lists dependencies, scripts, and metadata about the project.

- <span class="codeSnip">vite.config.js</span> or <span class="codeSnip">webpack.config.js</span>  
  Configuration file for build tools like Vite or Webpack.

- <span class="codeSnip">.gitignore</span>  
  Tells Git which files/folders to ignore (e.g., <span class="codeSnip">node_modules</span>).

---

## src/ (Source Folder)

This is where your actual application lives.

- <span class="codeSnip">main.jsx</span> or <span class="codeSnip">main.tsx</span>  
  Entry point for rendering your app. Uses <span class="codeSnip">ReactDOM.createRoot</span>.

- <span class="codeSnip">App.jsx</span>  
  Main app component. Acts as a wrapper for other components.

- <span class="codeSnip">components/</span>  
  Folder where you define reusable UI components.

- <span class="codeSnip">assets/</span>  
  Images, icons, and other static assets (optional, but common).

- <span class="codeSnip">styles/</span>  
  CSS or SCSS files for styling components globally or locally.

---

## public/ Folder

Only used in tools like Vite and CRA for static assets.

- <span class="codeSnip">index.html</span>  
  The base HTML file. Your React app mounts inside the <span class="codeSnip">&lt;div id="root"&gt;</span> here.

- <span class="codeSnip">favicon.ico</span>  
  The site icon shown in browser tabs.

Any file in <span class="codeSnip">public/</span> can be referenced directly in HTML with paths like <span class="codeSnip">/favicon.ico</span>.

---

## Optional: Folder Conventions

Some developers customize their folder layout as projects grow. Common conventions include:

- <span class="codeSnip">hooks/</span> – Custom hooks
- <span class="codeSnip">contexts/</span> – Context API logic
- <span class="codeSnip">pages/</span> – Top-level components (for routing)
- <span class="codeSnip">utils/</span> – Utility functions and helpers
- <span class="codeSnip">services/</span> – API calls or external service logic

---

## Summary

- <span class="codeSnip">src/</span> = App logic  
- <span class="codeSnip">public/</span> = Static assets  
- <span class="codeSnip">node_modules/</span> = Dependencies  
- Files like <span class="codeSnip">main.jsx</span>, <span class="codeSnip">App.jsx</span>, and <span class="codeSnip">index.html</span> form the app's entry points

Keep things modular and organized as your project grows.
