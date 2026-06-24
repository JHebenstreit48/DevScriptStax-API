# Introduction to Cypress

<hr class="dividerSection" />

## What Is End-to-End Testing?

<hr class="dividerSection" />

<span class="emphasis">End-to-end testing</span> (E2E) tests the entire application from start to finish from the end user's perspective.

It ensures the entire application is running and all components work together as expected — from the UI down to the database.

<hr class="dividerSection" />

## What Is Cypress?

<hr class="dividerSection" />

Cypress is a modern, end-to-end testing framework built for the modern web.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Runs directly in the browser alongside your application.</li>
    <li>Designed for <span class="codeSnip">JavaScript</span> and <span class="codeSnip">TypeScript</span> developers.</li>
    <li>Ideal for testing modern front-end frameworks like React, Vue, and Angular.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Why Use Cypress?

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Fast feedback loop with hot reloading of tests.</li>
    <li>Runs in the same run-loop as the app — gives better visibility.</li>
    <li>Uses a real browser — no WebDriver layer required.</li>
    <li>Built-in wait, retry, and assertion handling.</li>
    <li>Friendly debugging with time-travel snapshots and error messages.</li>
    <li>Excellent integration with CI tools like GitHub Actions and CircleCI.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Key Features at a Glance

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Easy to install with <span class="codeSnip">npm</span>.</li>
    <li>Visual test runner or headless CLI support.</li>
    <li>Built-in network traffic control (intercept, mock).</li>
    <li>Easy to write readable tests using chaining.</li>
    <li>Compatible with component and integration testing.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Cypress Test Structure

<hr class="dividerSection" />

Tests in Cypress are written in a way that feels like <span class="emphasis">instructions in a sentence</span>.

A Cypress test file is structured in three layers — the topic, the individual test, and the commands that run inside it:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">describe()</span> — wraps a group of related tests and defines the topic being tested.</li>
    <li><span class="codeSnip">it()</span> — defines one specific thing that should happen inside that topic.
      <ul class="diamondBullets fullWidthBullet">
        <li>Inside each <span class="codeSnip">it()</span> block, Cypress commands carry out the actual test steps.</li>
      </ul>
    </li>
  </ul>
</div>

This style makes Cypress easy to read, easy to write, and easy to teach.

<hr class="dividerSection" />

## Common Cypress Commands

<hr class="dividerSection" />

Each command inside an <span class="codeSnip">it()</span> block reads like a plain English instruction:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Cypress Command</th>
      <th class="tableCellHeader">What It Does</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cy.visit()</span></td>
      <td class="tableCell">Go to a specific URL</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cy.get()</span></td>
      <td class="tableCell">Find an element on the page</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cy.contains()</span></td>
      <td class="tableCell">Look for specific text on the page</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cy.click()</span></td>
      <td class="tableCell">Click a targeted element</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cy.should()</span></td>
      <td class="tableCell">Assert that something behaves as expected</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>E2E testing verifies the full application flow from the user's perspective.</li>
    <li>Cypress is ideal for modern front-end testing.</li>
    <li>Uses plain, readable syntax that flows like a sentence.</li>
    <li>Runs directly in the browser — no Selenium or WebDriver required.</li>
    <li>Great developer experience with built-in UI, debugging, and assertions.</li>
  </ul>
</div>

<hr class="dividerSection" />

<!-- <div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/aws-sam/advanced/cost-scaling/quotas-limits">← Back</a>
    <div class="xrefTitle">Topic: Cloud Services → AWS SAM → Quotas & Limits</div>
  </div> -->

  <div class="xrefItem">
    <a class="xrefBtn" href="/e2e/cypress/basics/fundamentals/setup">Next →</a>
    <div class="xrefTitle">Cypress → Fundamentals → Setup & Installation</div>
  </div>
</div>