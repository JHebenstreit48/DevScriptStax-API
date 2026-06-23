# Commands & Querying in Cypress

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Cypress commands are the building blocks of every test.

They are used to navigate to pages, find elements, interact with them, and verify their behavior.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Commands run sequentially and are automatically retried until they pass or time out.</li>
    <li>Commands can be chained together to build readable test flows.</li>
    <li>The general flow of a test should follow query → query → command or assertion.</li>
  </ul>
</div>

<hr class="dividerSection" />

## cy.visit()

<hr class="dividerSection" />

Navigates the Cypress browser to a given URL.

```js
cy.visit('/dashboard')
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Automatically waits for the page to finish loading.</li>
    <li>Works with relative or absolute URLs.</li>
    <li>Commonly placed inside a <span class="codeSnip">beforeEach()</span> block so every test in a suite starts from the same page.</li>
  </ul>
</div>

<hr class="dividerExample" />

#### Example

```js
cy.visit('/')
cy.contains('Welcome').should('exist')
```

<hr class="dividerSection" />

## cy.get()

<hr class="dividerSection" />

Selects one or more elements on the page using a CSS selector.

```js
cy.get('.form-input')
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Automatically retries until the element appears or the timeout is reached.</li>
    <li>Accepts any valid CSS selector — class, ID, tag, attribute, or a combination.</li>
    <li>Chains naturally with <span class="codeSnip">.should()</span>, <span class="codeSnip">.click()</span>, <span class="codeSnip">.type()</span>, and other commands.</li>
  </ul>
</div>

<hr class="dividerExample" />

#### Example

```js
cy.get('#username').type('admin')
cy.get('button[type="submit"]').click()
```

<hr class="dividerSection" />

## cy.contains()

<hr class="dividerSection" />

Finds an element that contains specific text.

```js
cy.contains('Welcome')
cy.contains('button', 'Submit')
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Can be passed just a string to find any element containing that text.</li>
    <li>Can be passed a selector and a string to narrow the search to a specific element type.</li>
    <li>Useful for asserting that text appears on the page after an action.</li>
  </ul>
</div>

<hr class="dividerSection" />

## cy.find()

<hr class="dividerSection" />

Finds a descendant element within a previously selected element.

```js
cy.get('.card').find('button')
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Unlike <span class="codeSnip">cy.get()</span> which searches the entire DOM, <span class="codeSnip">cy.find()</span> searches only within the parent element.</li>
    <li>Useful when multiple similar elements exist on the page and you need to scope your search.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Chaining Commands

<hr class="dividerSection" />

Cypress commands can be chained together to build expressive and readable test flows.

```js
cy.get('[data-cy="login-form"]')
  .find('input[name="email"]')
  .type('user@example.com')

cy.get('[data-cy="submit"]')
  .click()

cy.contains('Dashboard')
  .should('exist')
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>It is best practice not to chain anything after an action command like <span class="codeSnip">.click()</span> or <span class="codeSnip">.type()</span>.</li>
    <li>Keep chains short and readable — break them into separate commands when they get complex.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Aliasing Selectors

<hr class="dividerSection" />

You can alias a selector using <span class="codeSnip">.as()</span> to reuse it across multiple steps without re-querying the DOM.

```js
cy.get('.menu-item').as('menu')
cy.get('@menu').click()
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Aliases are referenced using the <span class="codeSnip">@</span> prefix.</li>
    <li>Useful for keeping tests readable and avoiding repetition.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Selector Best Practices

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Prefer <span class="codeSnip">data-cy</span> or <span class="codeSnip">data-testid</span> attributes over class names or IDs tied to styling.</li>
    <li>Avoid selectors tied to styling frameworks like Tailwind or Bootstrap classes — these change frequently.</li>
    <li>Using test-specific attributes decouples your tests from UI styling changes.</li>
  </ul>
</div>

```js
cy.get('[data-cy="submit-button"]').click()
```

<hr class="dividerSection" />

## cy.visit() vs cy.request()

<hr class="dividerSection" />

<span class="codeSnip">cy.visit()</span> opens the browser like a real user would.

<span class="codeSnip">cy.request()</span> performs HTTP requests in the background without rendering the UI.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">cy.visit()</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Loads full UI</td>
      <td class="tableCell">Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Test interactions with elements</td>
      <td class="tableCell">Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Mock or test API endpoints</td>
      <td class="tableCell">No</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">cy.request()</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Loads full UI</td>
      <td class="tableCell">No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Test interactions with elements</td>
      <td class="tableCell">No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Mock or test API endpoints</td>
      <td class="tableCell">Yes</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">cy.visit()</span> — navigates to a URL and waits for the page to load.</li>
    <li><span class="codeSnip">cy.get()</span> — selects elements using CSS selectors.</li>
    <li><span class="codeSnip">cy.contains()</span> — finds elements by their text content.</li>
    <li><span class="codeSnip">cy.find()</span> — finds descendant elements within a scoped parent.</li>
    <li>Chain commands to build readable test flows.</li>
    <li>Use <span class="codeSnip">data-cy</span> or <span class="codeSnip">data-testid</span> attributes for stable selectors.</li>
    <li>Alias selectors with <span class="codeSnip">.as()</span> for reuse across steps.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/e2e/cypress/basics/syntax/selector-strategies">← Back</a>
    <div class="xrefTitle">Cypress → Syntax → Selector Strategies</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/e2e/cypress/basics/syntax/assertions">Next →</a>
    <div class="xrefTitle">Cypress → Syntax → Assertions</div>
  </div>
</div>