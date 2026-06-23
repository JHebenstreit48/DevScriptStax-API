# Setup & Installation

<hr class="dividerSection" />

## Installing Cypress

<hr class="dividerSection" />

To install Cypress using npm:

```shell
npm install cypress --save-dev
```

This adds Cypress to your project's dev dependencies.

<hr class="dividerSection" />

## Cypress Test File Extensions

<hr class="dividerSection" />

Cypress test files use the following file extensions:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">.cy.js</span> — for JavaScript test files.</li>
    <li><span class="codeSnip">.cy.ts</span> — for TypeScript test files.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Adding Cypress Scripts to package.json

<hr class="dividerSection" />

You can create named scripts in your <span class="codeSnip">package.json</span> to make launching Cypress easier:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Script Name</th>
      <th class="tableCellHeader">Command</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cypress:open</span></td>
      <td class="tableCell"><span class="codeSnip">cypress open</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cypress:run</span></td>
      <td class="tableCell"><span class="codeSnip">cypress run</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Script Name</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cypress:open</span></td>
      <td class="tableCell">Launches Cypress GUI for interactive test runs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cypress:run</span></td>
      <td class="tableCell">Runs all tests headlessly from the terminal</td>
    </tr>
  </tbody>
</table>

Example <span class="codeSnip">scripts</span> section:

```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
```

<hr class="dividerSection" />

## Launching Cypress

<hr class="dividerSection" />

To open the visual Cypress test runner (GUI):

```shell
npx cypress open
```

To run all tests in headless mode from the CLI:

```shell
npx cypress run
```

<hr class="dividerSection" />

## Cypress GUI (Test Runner Interface)

<hr class="dividerSection" />

When you run <span class="codeSnip">npx cypress open</span> you will see:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A list of available test specs.</li>
    <li>Options for choosing a browser (Chrome, Electron, Edge, etc.).</li>
    <li>Real-time logs and screenshots.</li>
    <li>Time-travel feature — hover to see before and after DOM snapshots.</li>
    <li>Full command log for every <span class="codeSnip">cy</span> action.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Install Cypress with <span class="codeSnip">npm install cypress --save-dev</span>.</li>
    <li>Test files use <span class="codeSnip">.cy.js</span> or <span class="codeSnip">.cy.ts</span> extensions.</li>
    <li>Add custom launch scripts in <span class="codeSnip">package.json</span>.</li>
    <li>Use <span class="codeSnip">npx cypress open</span> for the GUI.</li>
    <li>Use <span class="codeSnip">npx cypress run</span> for headless test automation.</li>
    <li>The test runner gives powerful debugging and real-time feedback.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/e2e/cypress/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Cypress → Fundamentals → Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/e2e/cypress/basics/fundamentals/first-test">Next →</a>
    <div class="xrefTitle">Cypress → Fundamentals → Writing Your First Test</div>
  </div>
</div>