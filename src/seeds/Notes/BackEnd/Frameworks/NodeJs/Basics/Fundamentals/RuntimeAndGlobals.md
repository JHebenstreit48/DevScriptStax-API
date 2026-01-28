## Runtime & Globals (Node.js)

---

### What Does “Runtime” Mean?
---

A <span class="emphasis">runtime</span> is the environment that runs your JavaScript code.

In a browser, JavaScript runs inside the browser environment.  
In Node.js, JavaScript runs inside the Node environment.

---

### What Node.js Lets JavaScript Do
---

Node.js allows JavaScript to:
- Create files and folders
- Interact with the computer’s file system
- Listen for network requests (servers)

This means Node.js can perform general computer-related tasks, while a web browser is limited to browser-specific functionality.

---

### Node vs Browser (Quick Comparison)
---

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Environment</th>
      <th class="tableCellHeader">Best At</th>
      <th class="tableCellHeader">Common Limitation</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Browser</td>
      <td class="tableCell">Web pages, DOM, user interaction</td>
      <td class="tableCell">Cannot directly access your computer’s file system</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Node.js</td>
      <td class="tableCell">Servers, file system tasks, CLI tools</td>
      <td class="tableCell">No DOM by default</td>
    </tr>
  </tbody>
</table>

---

### “Globals” (Plain Meaning)
---

In a runtime, there are built-in things available for your code to use (built-in features and tools the environment provides).

Node’s runtime environment includes built-in capabilities for server and system-level tasks.

---

### Summary
---

- A runtime is the environment that executes your JavaScript
- Node.js runs JavaScript outside the browser
- Node.js can work with the file system and network requests
- Browsers focus on web pages and DOM behavior

---
