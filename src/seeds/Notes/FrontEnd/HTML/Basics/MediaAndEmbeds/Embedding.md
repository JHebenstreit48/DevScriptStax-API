# Embedding External Content

HTML makes it easy to embed other types of media or content into your page. This is useful for videos, maps, widgets, and even entire websites.

---

## &lt;iframe&gt;

The <span class="codeSnip">&lt;iframe&gt;</span> element embeds another webpage within the current page.

```html
&lt;iframe
  src="https://example.com"
  width="600"
  height="400"
  title="Embedded Page"&gt;
&lt;/iframe&gt;
```

- <span class="codeSnip">src</span>: The URL to embed
- <span class="codeSnip">title</span>: Required for accessibility
- <span class="codeSnip">width</span>/<span class="codeSnip">height</span>: Controls dimensions

---

## Embedding YouTube

YouTube provides iframe code you can paste directly into your HTML:

```html
&lt;iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  allowfullscreen&gt;
&lt;/iframe&gt;
```

---

## &lt;embed&gt; vs &lt;object&gt; vs &lt;iframe&gt;

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Element</th>
      <th class="tableCellHeader">Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">&lt;iframe&gt;</td>
      <td class="tableCell">Embed external webpages or videos (YouTube, Google Maps)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&lt;embed&gt;</td>
      <td class="tableCell">Used for multimedia (PDFs, Flash — now obsolete)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&lt;object&gt;</td>
      <td class="tableCell">More flexible; can include fallback content</td>
    </tr>
  </tbody>
</table>

---

## Responsive Embeds with CSS

Wrap your <span class="codeSnip">&lt;iframe&gt;</span> in a container to make it scale properly on mobile:

```css
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

## Summary

- Use <span class="codeSnip">&lt;iframe&gt;</span> to embed pages or media
- Only use <span class="codeSnip">&lt;embed&gt;</span> or <span class="codeSnip">&lt;object&gt;</span> for older formats
- Always include a <span class="codeSnip">title</span> for accessibility
- Use a responsive container when embedding videos

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/html/intermediate/media-and-embeds/media">← Back</a>
    <div class="xrefTitle">Media Elements</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/html/intermediate/media-and-embeds/captions-and-tracks">Next →</a>
    <div class="xrefTitle">Captions & Tracks</div>
  </div>
</div>