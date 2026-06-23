# Writing Your First Cypress Test

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Cypress makes end-to-end testing straightforward by running tests inside a real browser and providing immediate feedback as you write and save your code.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Tests run inside a real browser for accurate results.</li>
    <li>Cypress automatically reloads and reruns tests when you save a file.</li>
    <li>First tests often confirm the app loads and core UI elements appear as expected.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Basic Test Structure

<hr class="dividerSection" />

Every Cypress test file begins with a <span class="codeSnip">describe()</span> block which organizes related tests and provides context.

Inside it, each <span class="codeSnip">it()</span> block defines an individual test case.

The general flow of a test should follow query → query → command or assertion.

It is best practice not to chain anything after an action command.

```js
describe('My First Test', () => {
  it('confirms the page loads', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Welcome')
    cy.url().should('include', 'localhost')
  })
})
```

<hr class="dividerSection" />

## The AAA Pattern

<hr class="dividerSection" />

A well-structured Cypress test follows the <span class="emphasis">Arrange</span>, <span class="emphasis">Act</span>, <span class="emphasis">Assert</span> pattern:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Arrange</span> — Set up the test by visiting the correct URL or preparing state.</li>
    <li><span class="emphasis">Act</span> — Perform an action such as clicking a button or typing into a field.</li>
    <li><span class="emphasis">Assert</span> — Verify the result behaves as expected using <span class="codeSnip">cy.should()</span>.</li>
  </ul>
</div>

```js
describe('Todo App', () => {
  it('adds a single todo', () => {
    cy.visit('http://localhost:3000')                // Arrange
    cy.get('.new-todo').type('Buy Milk{enter}')      // Act
    cy.get('.todo-list li').should('have.length', 1) // Assert
  })
})
```

<hr class="dividerSection" />

## Using data-cy Attributes

<hr class="dividerSection" />

The most effective strategy in Cypress is to use custom <span class="codeSnip">data-*</span> attributes specifically designed for testing purposes.

Using CSS selectors tied to styling can break if the button is renamed or restyled.

A more resilient approach is to add a <span class="codeSnip">data-cy</span> attribute to the element in HTML and target it in your test.

```html
<button data-cy="submit-button">Submit</button>
```

```js
cy.get('[data-cy="submit-button"]').click()
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Using <span class="codeSnip">data-cy</span> attributes decouples your tests from styling and layout changes.</li>
    <li>Tests using <span class="codeSnip">data-cy</span> are less likely to break when the UI is updated.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Automatic Waiting

<hr class="dividerSection" />

Cypress automatically waits for elements to appear, actions to complete, and pages to load before moving on to the next command.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>You do not need to add manual <span class="codeSnip">cy.wait()</span> calls for most scenarios.</li>
    <li>Cypress retries commands automatically until they pass or time out.</li>
    <li>Avoid hardcoded waits like <span class="codeSnip">cy.wait(3000)</span> — use assertions or intercepts instead.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use <span class="codeSnip">describe()</span> to group related tests and <span class="codeSnip">it()</span> for individual test cases.</li>
    <li>Follow the <span class="emphasis">Arrange</span>, <span class="emphasis">Act</span>, <span class="emphasis">Assert</span> pattern for clear and readable tests.</li>
    <li>Use <span class="codeSnip">data-cy</span> attributes to select elements reliably.</li>
    <li>Cypress handles automatic waiting — avoid hardcoded delays.</li>
    <li>First tests should confirm the app loads and core UI elements are visible.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/e2e/cypress/basics/fundamentals/setup">← Back</a>
    <div class="xrefTitle">Cypress → Fundamentals → Setup & Installation</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/e2e/cypress/basics/project-structure/structure">Next →</a>
    <div class="xrefTitle">Section: Cypress → Project Structure → Structure</div>
  </div>
</div>