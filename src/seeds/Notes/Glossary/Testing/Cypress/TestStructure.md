# Cypress Test Structure

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Term</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">describe()</span></td>
      <td class="tableCell">Groups related tests together and defines the topic being tested</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">it()</span></td>
      <td class="tableCell">Defines an individual test case — describes what specific thing should happen</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">beforeEach()</span></td>
      <td class="tableCell">Runs setup logic before each <span class="codeSnip">it()</span> block inside the same <span class="codeSnip">describe()</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">afterEach()</span></td>
      <td class="tableCell">Runs cleanup logic after each <span class="codeSnip">it()</span> block</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">data-cy</span></td>
      <td class="tableCell">HTML attribute used to create stable, test-specific element selectors</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">data-testid</span></td>
      <td class="tableCell">Alternative test-specific attribute used similarly to <span class="codeSnip">data-cy</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">AAA Pattern</span></td>
      <td class="tableCell">Arrange, Act, Assert — the recommended structure for writing clear and readable tests</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">.cy.js</span></td>
      <td class="tableCell">File extension for JavaScript Cypress test files</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">.cy.ts</span></td>
      <td class="tableCell">File extension for TypeScript Cypress test files</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/e2e/cypress/basics/fundamentals/introduction">Cypress → Fundamentals → Introduction</a><br />
  <a href="/e2e/cypress/basics/fundamentals/first-test">Cypress → Fundamentals → Writing Your First Test</a><br />
  <a href="/e2e/cypress/basics/syntax/test-blocks">Cypress → Syntax → Test Block Structure</a>
</div>