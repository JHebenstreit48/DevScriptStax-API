# Overview

<hr class="dividerSection" />

MongoDB can be run locally or hosted in the cloud using MongoDB Atlas.

<hr class="dividerSection" />

## Default Configuration

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Default MongoDB <span class="emphasis">port</span>: <span class="codeSnip">27017</span>.</li>
    <li>Databases are created lazily — on first write.</li>
    <li>Collections do not require predefined schemas.</li>
  </ul>
</div>

<hr class="dividerSection" />

## MongoDB Atlas & Clusters

<hr class="dividerSection" />

When creating a MongoDB account, you typically start by building a <span class="emphasis">cluster</span>. A cluster is where your databases and collections live.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Atlas UI may show <span class="codeSnip">Build my first cluster</span> or <span class="codeSnip">Create Cluster</span>.</li>
    <li>A single cluster can host multiple databases.</li>
    <li>Free-tier defaults are sufficient for learning and development.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/mongodb/tools/gui-and-cli/atlas">MongoDB → Tools → GUI & CLI → Atlas</a>
</div>

<hr class="dividerSection" />

## Cloud Providers

<hr class="dividerSection" />

When creating a cluster, you choose a cloud provider that physically stores your data.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">AWS</span> (Amazon Web Services)</li>
    <li><span class="emphasis">Google Cloud</span></li>
    <li><span class="emphasis">Microsoft Azure</span></li>
  </ul>
</div>

For most beginner setups, the default region and configuration are acceptable.

<hr class="dividerSection" />

## Local vs Cloud

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Local MongoDB → runs on your machine using <span class="codeSnip">mongod</span>.</li>
    <li>Atlas MongoDB → managed cloud database accessed via connection string.</li>
    <li>Both expose the same database concepts — databases, collections, and documents.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/mongodb/tools/dev-workflow/connection-strings">MongoDB → Tools → Dev Workflow → Connection Strings & Environments</a><br />
  <a href="/mongodb/tools/gui-and-cli/compass">MongoDB → Tools → GUI & CLI → Compass</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/nosql-vs-sql">← Back</a>
    <div class="xrefTitle">MongoDB - Basics - Fundamentals - NoSQL vs SQL</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/use-cases">Next →</a>
    <div class="xrefTitle">MongoDB - Basics - Fundamentals - Use Cases</div>
  </div>
</div>