# Open Graph & Sharing Metadata

---

## 🌐 What Is Open Graph?

Open Graph is a protocol developed by Facebook that enables you to control how URLs appear when shared on social media or messaging platforms.

It uses meta tags in the HTML <span class="codeSnip">&lt;head&gt;</span> to define:

- Title
- Description
- Image preview
- Link destination
- Site name and type

---

## 🧠 Why It Matters for React?

In React, especially with Single Page Applications (SPAs), metadata doesn’t update between pages unless managed intentionally. This means:

- Static meta tags in <span class="codeSnip">index.html</span> apply globally.
- You need dynamic meta handling for route-specific previews.

---

## 🏗️ Static Open Graph Tags (Vite + CRA)

### React with Vite

- Open the root <span class="codeSnip">index.html</span> file.

html
<meta property="og:title" content="My Awesome Site">
<meta property="og:description" content="Come explore this amazing content.">
<meta property="og:image" content="/thumbnail.jpg">
<meta property="og:url" content="https://mysite.com">
<meta property="og:type" content="website">

- Place <span class="codeSnip">thumbnail.jpg</span> in your public or root directory.

### React with Create React App

- Open <span class="codeSnip">public/index.html</span>.
- Use <span class="codeSnip">%PUBLIC_URL%</span> in the image path:

html
<meta property="og:image" content="%PUBLIC_URL%/thumbnail.jpg">

---

## ⚡ Making Tags Dynamic

If you want per-route customization, you’ll need a tool like:

- <span class="codeSnip">react-helmet</span>
- Server-side rendering (e.g., Next.js)

bash
npm install react-helmet

javascript
import { Helmet } from 'react-helmet';

const MyPage = () => (
  <>
    <Helmet>
      <meta property="og:title" content="My Page Title" />
      <meta property="og:description" content="Page-specific description." />
      <meta property="og:image" content="/images/og-preview.png" />
      <meta property="og:url" content="https://mysite.com/mypage" />
    </Helmet>
    <div>Page content...</div>
  </>
);

---

## 🤝 Other Meta Tags to Consider

- <span class="codeSnip">twitter:card</span> – For Twitter previews
- <span class="codeSnip">og:site_name</span> – Name of your website
- <span class="codeSnip">og:type</span> – Common values: <span class="codeSnip">website</span>, <span class="codeSnip">article</span>, <span class="codeSnip">video.other</span>

---

## Summary

- Use Open Graph tags for better link previews on social media.
- Place static tags in <span class="codeSnip">index.html</span>, or use <span class="codeSnip">react-helmet</span> for dynamic metadata.
- Always verify your output using preview tools like Facebook’s Sharing Debugger or Twitter Card Validator.
