## Lockfiles (npm)

---

### What Is a Lockfile?
---

When you install packages with npm, it creates a lockfile (usually <span class="codeSnip">package-lock.json</span>).

A lockfile helps keep installs consistent by recording the exact dependency versions that were installed.

---

### Why It Exists
---

Even if two projects have the same <span class="codeSnip">package.json</span>, packages can have their own dependencies (and those dependencies can change over time).

A lockfile helps ensure:
- More consistent installs across machines
- Fewer “it works on my computer” dependency surprises

---

### Common Lockfile for npm
---

- <span class="codeSnip">package-lock.json</span>

You’ll often see it change when you run <span class="codeSnip">npm install</span> or update packages.

---

### Summary
---

- Lockfiles record exact installed dependency versions
- They help make installs repeatable and predictable
- npm’s lockfile is <span class="codeSnip">package-lock.json</span>

---
