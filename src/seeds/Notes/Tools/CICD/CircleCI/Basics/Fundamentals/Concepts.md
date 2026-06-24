# Key Concepts in CI/CD

<hr class="dividerSection" />

## DevOps Overview

<hr class="dividerSection" />

<span class="emphasis">DevOps</span> is a mindset devoted to collaboration, communication, and integration between developers and operations teams.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Fosters collaboration and experimentation among teams.</li>
    <li>Improves the speed and reliability of projects by automating parts of the development and deployment process.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Key Questions in DevOps

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Why?</span> — The reasons and motivations behind a strategy.</li>
    <li><span class="emphasis">What?</span> — The goals and objectives the strategy intends to achieve.</li>
    <li><span class="emphasis">Who?</span> — The people who benefit from the solution.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Standards vs Rules in DevOps

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Standards</span></td>
      <td class="tableCell">Flexible norms or guidelines agreed upon as best practices. Promote efficiency, consistency, and quality. Adaptable to specific projects or situations.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Rules</span></td>
      <td class="tableCell">Strict, non-negotiable requirements. Address legal, security, and safety concerns.</td>
    </tr>
  </tbody>
</table>

Examples of rules:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Password and secret key policies.</li>
    <li>Access control rules.</li>
    <li>Workplace compliance.</li>
  </ul>
</div>

<hr class="dividerSection" />

## CI/CD Pipeline

<hr class="dividerSection" />

A CI/CD pipeline consists of <span class="emphasis">continuous integration</span>, <span class="emphasis">delivery</span>, and <span class="emphasis">deployment</span> phases.

Each phase has specific tasks or processes to perform, and each phase consists of sequential stages defined by the company's workflows.

<hr class="dividerSubsection1" />

### CI/CD Pipeline Stages

<hr class="dividerSubsection1" />

<div class="centeredNumberedList">

1. <span class="emphasis">Code</span>

2. <span class="emphasis">Build</span>

3. <span class="emphasis">Integrate</span>

4. <span class="emphasis">Test</span>

5. <span class="emphasis">Release</span>

6. <span class="emphasis">Deploy</span>

</div>

<hr class="dividerSection" />

## Phases of CI/CD

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Continuous Integration</span> — Spans from the Code to Test phase. Automatically integrates and tests code changes.</li>
    <li><span class="emphasis">Continuous Delivery</span> — Spans from the Code to Release phase. Automatically releases to a staging environment when all tests pass.</li>
    <li><span class="emphasis">Continuous Deployment</span> — Spans from the Code to Deployment phase. Automatically releases to the production environment if all tests pass.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/ci-cd/circle-ci/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">CircleCI → Fundamentals → Introduction to CircleCI</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/ci-cd/circle-ci/basics/circle-ci-setup/setup">Next →</a>
    <div class="xrefTitle">Section: CircleCI → CircleCI Setup → Installing & Setting Up CircleCI</div>
  </div>
</div>