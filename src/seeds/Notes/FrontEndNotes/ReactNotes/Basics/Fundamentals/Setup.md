# Setup & Installation

---

## 🧰 Prerequisites

Before installing React with Vite, make sure the following are installed on your system:

1. **Node.js (LTS version recommended)**  
   Download from: https://nodejs.org/

2. **Package Manager**  
   Comes with Node.js: <span class="codeSnip">npm</span>  
   Optionally install Yarn: <span class="codeSnip">npm install -g yarn</span>

---

## ⚙️ Step-by-Step: Creating a React App with Vite

### 1. Create Your Project with Vite

Run the following in your terminal:

shell
npm create vite@latest

---

### 2. Name Your Project

When prompted:

shell  
? Project name: › .

Using a single dot tells Vite to create the app in the current folder, avoiding nested directories.

---

### 3. Choose a Framework

Use arrow keys to select:

shell
>React

or  

shell
>React + TypeScript

(If you are using React with TypeScript)

Then press **Enter**.

---

## 📦 Step 4: Install Dependencies

Once the project is scaffolded, install all necessary dependencies:

shell  
npm install

---

## 🚀 Step 5: Start the Development Server

Run the following to start your local server:

shell  
npm run dev

This should show something to the effect of:

shell
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help


---

## 🧩 Optional: Add a Favicon

1. Place your favicon file (e.g., <span class="codeSnip">favicon.ico</span>) in the <span class="codeSnip">public</span> folder  
2. In your <span class="codeSnip">index.html</span>, add this inside the <span class="codeSnip">&lt;head&gt;</span>:

```html
<link rel="icon" href="/favicon.ico" />
```