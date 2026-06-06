# What a Connection String Does

<hr class="dividerSection" />

A <span class="emphasis">connection string</span> is used by tools and applications to connect to a MongoDB database.

It tells the client:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Where the database is hosted.</li>
    <li>How to authenticate.</li>
    <li>Which database to connect to.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Local vs Atlas Environments

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Local MongoDB commonly uses <span class="codeSnip">mongodb://</span>.</li>
    <li>MongoDB Atlas commonly uses <span class="codeSnip">mongodb+srv://</span>.</li>
    <li>Both formats represent the same concept — how to reach and access the database.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Database Users & Credentials

<hr class="dividerSection" />

When using MongoDB Atlas, you must create a database user with:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A username.</li>
    <li>A password.</li>
  </ul>
</div>

These credentials are required to authenticate and are referenced by the connection process.

<hr class="dividerSection" />

## Editing an Atlas Connection String

<hr class="dividerSection" />

Atlas provides connection options such as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Connect Your Application</span></li>
    <li>A section labeled something like <span class="emphasis">Connection String Only</span></li>
  </ul>
</div>

Common edits include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Replacing <span class="codeSnip">&lt;password&gt;</span> with your actual password.</li>
    <li>Replacing <span class="codeSnip">test</span> with the database name you want to use.</li>
    <li>The database name can be found or created in the <span class="emphasis">Collections</span> section of Atlas.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Atlas Network Access

<hr class="dividerSection" />

To allow your application or tools to connect to an Atlas cluster, network access may need to be configured.

A common development option is adding <span class="codeSnip">0.0.0.0/0</span> which allows connections from any IP address. This is convenient for development but not recommended for production.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/tools/dev-workflow/seeding-and-local">← Back</a>
    <div class="xrefTitle">MongoDB - Tools - Dev Workflow - Seeding & Local Dev</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mysql/basics/fundamentals/introduction">Next →</a>
    <div class="xrefTitle">Topic: MySQL - Basics - Fundamentals - Introduction</div>
  </div>
</div>