# Setup & Installation

---

## Installing Cypress

To install Cypress using npm:

```shell
npm install cypress --save-dev
```

This adds Cypress to your project's dev dependencies.

---

## Adding Cypress Scripts to package.json

You can create named scripts in your <span class="codeSnip">package.json</span> to make launching Cypress easier:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Script Name</th>
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cypress:open</span></td>
      <td class="tableCell"><span class="codeSnip">cypress open</span></td>
      <td class="tableCell">Launches Cypress GUI for interactive test runs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cypress:run</span></td>
      <td class="tableCell"><span class="codeSnip">cypress run</span></td>
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

---

## Launching Cypress

To open the visual Cypress test runner (GUI):

```shell
npx cypress open
```

To run all tests in headless mode from the CLI:

```shell
npx cypress run
```
---

## Cypress GUI (Test Runner Interface)

When you run <span class="codeSnip">npx cypress open</span>, you’ll see:

✅ A list of available test specs  
✅ Options for choosing a browser (Chrome, Electron, Edge, etc.)  
✅ Real-time logs and screenshots  
✅ Time-travel feature (hover to see before/after DOM snapshots)  
✅ Full command log for every <span class="codeSnip">cy</span> action

---

## Summary

✅ Install Cypress with npm  
✅ Add custom launch scripts in <span class="codeSnip">package.json</span>  
✅ Use <span class="codeSnip">npx cypress open</span> for the GUI  
✅ Use <span class="codeSnip">npx cypress run</span> for headless test automation  
✅ The test runner gives powerful debugging and real-time feedback  
