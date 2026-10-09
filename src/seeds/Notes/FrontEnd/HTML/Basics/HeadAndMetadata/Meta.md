# Meta Tags

Meta tags are placed inside the <span class="codeSnip">&lt;head&gt;</span> and provide structured data about the page. They assist with SEO, responsiveness, and social media previews.

---

## Essential Meta Tags

<span class="codeSnip">&lt;meta charset="utf-8"&gt;</span> — Sets character encoding  
<span class="codeSnip">&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</span> — Controls mobile zoom  
<span class="codeSnip">&lt;meta name="description" content="..."&gt;</span> — Summary shown in search engines  
<span class="codeSnip">&lt;meta name="author" content="..."&gt;</span> — Specifies page author

```html
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
&lt;meta name="description" content="A guide to building responsive pages"&gt;
&lt;meta name="author" content="DevScriptStax"&gt;
```

---

## Open Graph and Twitter Tags

These help define how your site appears when shared on platforms like Facebook and Twitter:

```html
&lt;meta property="og:title" content="HTML Guide"&gt;
&lt;meta property="og:description" content="Learn semantic HTML best practices."&gt;
&lt;meta name="twitter:card" content="summary_large_image"&gt;
```

---

## Best Practices

- Always include encoding and viewport for modern devices  
- Include <span class="codeSnip">description</span> and <span class="codeSnip">author</span> to improve indexing  
- Use Open Graph for richer social media sharing

---

## Summary

- Meta tags help search engines and devices understand your page  
- They’re invisible to users but crucial for modern web development  
- Keep them inside the <span class="codeSnip">&lt;head&gt;</span>
