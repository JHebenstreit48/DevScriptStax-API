# Test Block Structure (describe, it, beforeEach)

---

## Overview

In Cypress, test files are organized using **Mocha-style syntax**, which includes:

- <span class="codeSnip">describe()</span> — groups related tests together
- <span class="codeSnip">it()</span> — defines an individual test case
- <span class="codeSnip">beforeEach()</span> — runs setup logic before each test

These keywords make your test structure readable and modular.

---

## describe()

Groups a set of related tests. Use it to wrap all test logic that shares a common context.

Example:

describe('Login Page', () => {
  // test cases go here
});

🧠 Think of it as the test "category" or topic.

---

## it()

Defines an individual test. The name should describe what the test checks.

Example:

it('should allow users to log in', () => {
  // test steps here
});

✅ Use a **present-tense statement** for test clarity (e.g. “displays error” not “should display error”).

---

## beforeEach()

Runs once before **each** <span class="codeSnip">it()</span> block inside the same <span class="codeSnip">describe()</span>.

Example:

beforeEach(() => {
  cy.visit('/login');
});

✅ Use for test setup steps like visiting a page or resetting state.

---

## Example Structure

describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('displays the login form', () => {
    cy.get('form').should('exist');
  });

  it('logs in successfully with valid credentials', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('secret');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('exist');
  });
});

---

## Human-Readable Analogy

Think of Cypress test files as **action-driven sentences**:

- <span class="codeSnip">describe()</span> = “The topic or subject being tested”  
- <span class="codeSnip">it()</span> = “This thing should happen”  
- Inside each test:
  - <span class="codeSnip">cy.visit()</span> = “Go to this place”  
  - <span class="codeSnip">cy.get()</span> = “Find this thing”  
  - <span class="codeSnip">cy.contains()</span> = “Look for this text”  
  - <span class="codeSnip">cy.click()</span> = “Click this”  
  - <span class="codeSnip">cy.should()</span> = “Verify it behaves like this”

This structure makes tests **almost readable like scripts**, which is what gives Cypress its natural fluency.

---

## Summary

✅ <span class="codeSnip">describe()</span> groups related tests  
✅ <span class="codeSnip">it()</span> defines specific expectations  
✅ <span class="codeSnip">beforeEach()</span> sets shared setup logic  
✅ The test file flows like a scripted sentence of actions  
