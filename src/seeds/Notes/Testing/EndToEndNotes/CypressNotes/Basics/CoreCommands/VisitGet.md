## Visit and Get
---

These two commands form the **core building blocks** of Cypress test interactions:

- <span class="codeSnip">cy.visit()</span> loads a URL into the test browser  
- <span class="codeSnip">cy.get()</span> selects a DOM element using a CSS selector

They’re almost always the first commands in any test block.

---

## cy.visit()

This command navigates the Cypress browser to a given URL.

```javascript
cy.visit('/dashboard')
```

✅ Automatically waits for the page to finish loading  
✅ Works with relative or absolute URLs

You’ll usually place <span class="codeSnip">cy.visit()</span> inside a <span class="codeSnip">beforeEach()</span> or at the top of your <span class="codeSnip">it()</span> block.

### Example:

```javascript
cy.visit('/')  
cy.contains('Welcome').should('exist')
```

---

## cy.get()

This command selects an element on the page using a **CSS selector**.

```javascript
cy.get('.form-input')
```

✅ Automatically retries for a default timeout  
✅ Works well with <span class="codeSnip">.should()</span>, <span class="codeSnip">.click()</span>, <span class="codeSnip">.type()</span>, etc.  
✅ Accepts any valid CSS selector

### Example:

```javascript
cy.get('#username').type('admin')  
cy.get('button[type="submit"]').click()
```

---

## Best Practices

✅ Prefer **IDs** or **data-* attributes** over dynamic class names  
✅ Avoid selectors tied to styling frameworks (e.g. Tailwind or Bootstrap classes)  
✅ Use consistent <span class="codeSnip">data-cy</span> or <span class="codeSnip">data-testid</span> attributes for stability

```javascript
cy.get('[data-cy="submit-button"]').click()
```

✅ Alias selectors for readability and reuse:

```javascript
cy.get('.menu-item').as('menu')  
cy.get('@menu').click()
```

---

## cy.visit() vs. cy.request()

<span class="codeSnip">cy.visit()</span> opens the browser like a real user.  
<span class="codeSnip">cy.request()</span> performs HTTP requests in the background without rendering the UI.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">cy.visit()</th>
      <th class="tableCellHeader">cy.request()</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Loads full UI</td>
      <td class="tableCell">✅ Yes</td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Test interactions with elements</td>
      <td class="tableCell">✅ Yes</td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Mock or test API endpoints</td>
      <td class="tableCell">❌ No</td>
      <td class="tableCell">✅ Yes</td>
    </tr>
  </tbody>
</table>

---

## Summary

✅ <span class="codeSnip">cy.visit()</span> = Go to this place  
✅ <span class="codeSnip">cy.get()</span> = Find this thing  

These are the foundation of almost every Cypress test.  
Use them confidently before chaining assertions and actions.
