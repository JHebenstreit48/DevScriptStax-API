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

You’ll usually place <span class="codeSnip">cy.visit()</span> inside a <span class="codeSnip">beforeEach()</span> or the top of your <span class="codeSnip">it()</span> block.

### Example:

```javascript
cy.visit('/');
cy.contains('Welcome').should('exist');
```