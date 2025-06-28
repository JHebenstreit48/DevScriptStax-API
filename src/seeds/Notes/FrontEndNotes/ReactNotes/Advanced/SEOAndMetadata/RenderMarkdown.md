# Rendering Markdown in React

---

## Where Should Markdown Files Go?

To ensure that your <span class="emphasis">.md</span> files render correctly in both development and production, their **location** matters:

- Place them in the <span class="emphasis">public/</span> folder so they are included in the build output.
- If placed in <span class="emphasis">src/</span>, they might load locally but **won’t render after deployment**.

---

## Accessing Markdown Files

Since files in the <span class="emphasis">public/</span> folder are publicly accessible, you can fetch them using standard <span class="codeSnip">fetch()</span>:

```javascript
fetch('/notes/cheatsheet.md')
  .then(response => response.text())
  .then(markdown => {
    // Do something with the Markdown
  });
```

---

## Rendering Markdown to HTML

To convert Markdown to HTML, you’ll need a parser like:

- <span class="codeSnip">marked</span> — fast, minimal
- <span class="codeSnip">remark</span> — flexible and pluggable
- <span class="codeSnip">react-markdown</span> — renders Markdown as React components

### Example with react-markdown

```bash
npm install react-markdown
```

```javascript
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/notes/cheatsheet.md')
      .then(res => res.text())
      .then(setContent);
  }, []);

  return <ReactMarkdown>{content}</ReactMarkdown>;
};
```

---

## Considerations for Markdown Rendering

- Sanitize input if you're rendering user-generated content.
- Styling depends on your CSS — raw HTML from Markdown won't automatically look “pretty.”
- You can style tags like <span class="codeSnip">&lt;h1&gt;</span>, <span class="codeSnip">&lt;ul&gt;</span>, <span class="codeSnip">&lt;code&gt;</span> globally or with scoped styles.

---

## Summary

- Store Markdown files in the <span class="codeSnip">public/</span> directory.
- Use <span class="codeSnip">fetch</span> to retrieve and <span class="codeSnip">react-markdown</span> to render.
- Customize output with styling or Markdown plugins for extended functionality.
