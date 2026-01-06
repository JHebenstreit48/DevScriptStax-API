# Formatting in Markdown

Text formatting is one of the most frequently used features in Markdown. It allows you to add emphasis, structure inline content, and make text stand out without leaving the plain-text world.

---

### Basic Emphasis

```markdown
**This is bold**  
__This is also bold__

*This is italic*  
_This is also italic_

**Bold and *nested italic* inside**  
~~Strikethrough text~~
```

---

### Combining Emphasis

You can nest emphasis for stronger visual hierarchy.

```markdown
***Bold and italic together***
**Bold with *italic inside***
*Italic with **bold inside***
```

---

### Inline Code

Use backticks for short code or commands.

```markdown
Use `console.log()` to print values.
Don't forget to run `npm install` first.

Inline `code` looks like this.
```
---

### Escaping Special Characters

Markdown uses special characters like *, _, #, etc. Escape them with a backslash when you want them literal.

```markdown
\*This is not italic\*
\# This is not a header
`Backtick is escaped with \`backtick\``
```

🔹 Use \ to escape: \*, \_, \\, \[, \], \#, \`, etc.
---

### Horizontal Rules

Create visual breaks with three or more hyphens, asterisks, or underscores.

```markdown
---
***
___
```

All three render as a horizontal line.

---

### Best Practices for Formatting

🔹 Use consistent style: Pick **bold** or __bold__ and stick to it project-wide

🔹 Keep nesting simple: Avoid ***triple emphasis*** — it can look noisy

🔹 Use inline code for commands, variables, or short snippets — never for long blocks

🔹 Test rendering: Some editors (Obsidian, GitHub) handle nesting differently

Formatting keeps your content clean, readable, and professional with minimal effort.

<div>  
Next:  
<a href="/markdown/basics/content-elements/tables"><span class="emphasis">Content Elements → Tables</span></a>  
</div>