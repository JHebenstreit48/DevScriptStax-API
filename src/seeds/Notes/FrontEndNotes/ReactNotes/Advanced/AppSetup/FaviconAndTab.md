# Favicon & Tab Icon

---

## 🎯 What Is a Favicon?

A **favicon** (short for "favorite icon") is the small icon that appears in the browser tab, bookmarks, and sometimes as a shortcut icon. It's a small but vital branding tool.

---

## 🗂️ Where to Put It

Place your favicon image (e.g., <span class="codeSnip">.ico</span>, <span class="codeSnip">.png</span>, or <span class="codeSnip">.svg</span>) in the <span class="codeSnip">public</span> folder:

- In **Vite**: <span class="codeSnip">/public/favicon.ico</span>
- In **Create React App**: <span class="codeSnip">public/favicon.ico</span>

This ensures the browser can directly access the file at the root URL (e.g., https://yourdomain.com/favicon.ico).

---

## 🧠 How to Link It

Open your project’s <span class="codeSnip">index.html</span> and add this inside the <span class="codeSnip">&lt;head&gt;</span>:

```html  
<link rel="icon" href="/favicon.ico">
```

If using <span class="codeSnip">.png</span> or <span class="codeSnip">.svg</span>, it’s best to include the MIME type:

```html  
<link rel="icon" type="image/png" href="/favicon.png">
```
---

## React Project Differences

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Project Type</th>
      <th class="tableCellHeader">index.html Location</th>
      <th class="tableCellHeader">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Vite</td>
      <td class="tableCell"><span class="codeSnip">/index.html</span></td>
      <td class="tableCell">Located in the root directory</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Create React App</td>
      <td class="tableCell"><span class="codeSnip">public/index.html</span></td>
      <td class="tableCell">Located in the <span class="codeSnip">public</span> folder</td>
    </tr>
  </tbody>
</table>

---

## Cache Gotcha

If the favicon doesn’t update after replacing it, try the following:

- Hard-refresh your browser (<span class="codeSnip">Ctrl+Shift+R</span> or <span class="codeSnip">Cmd+Shift+R</span>)
- Clear the browser cache for the site
- Rename the file and update the link to bust caching

---

## Pro Tip

Want to verify your favicon?

1. Open DevTools (<span class="codeSnip">F12</span>)
2. Go to the **Network** tab
3. Reload your app and look for <span class="codeSnip">favicon.ico</span>
4. Confirm the request is hitting the right path and file

---

## ✅ Summary

- Favicons live in the <span class="codeSnip">public</span> folder for direct access
- Add a <span class="codeSnip">&lt;link rel="icon"&gt;</span> tag in your HTML’s <span class="codeSnip">&lt;head&gt;</span>
- If updates don’t show, clear cache or rename the file to force reload
