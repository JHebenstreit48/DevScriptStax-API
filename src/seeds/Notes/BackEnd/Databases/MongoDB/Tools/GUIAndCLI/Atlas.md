# MongoDB Atlas

<hr class="dividerSection" />

## What Is MongoDB Atlas?

<hr class="dividerSection" />

MongoDB Atlas is a fully managed, cloud-hosted MongoDB service. It allows you to run MongoDB without managing servers or infrastructure.

<hr class="dividerSection" />

## Clusters

<hr class="dividerSection" />

In Atlas, databases are hosted inside <span class="emphasis">clusters</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A cluster can contain multiple databases.</li>
    <li>Cluster creation is typically the first step when setting up Atlas.</li>
    <li>Free-tier clusters are sufficient for learning and development.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Cloud Providers

<hr class="dividerSection" />

Atlas allows you to choose where your data is hosted.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Amazon Web Services (AWS)</span></li>
    <li><span class="emphasis">Google Cloud</span></li>
    <li><span class="emphasis">Microsoft Azure</span></li>
  </ul>
</div>

The default region and configuration are usually adequate for getting started.

<hr class="dividerSection" />

## Users & Network Access

<hr class="dividerSection" />

Atlas requires configuration for access and security.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Database users define authentication credentials.</li>
    <li>Network access controls which IPs can connect.</li>
    <li>Development setups often relax restrictions for convenience.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Connection Strings

<hr class="dividerSection" />

Atlas provides connection strings for connecting tools and applications to your cluster.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Used by Compass and application code.</li>
    <li>Include host, authentication, and database information.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/mongodb/tools/dev-workflow/connection-strings">
    MongoDB → Tools → Dev Workflow → Connection Strings & Environments
  </a>
</div>

<hr class="dividerSection" />

## Atlas CLI

<hr class="dividerSection" />

MongoDB also provides a command-line interface for interacting with Atlas.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Used for managing Atlas resources from the terminal.</li>
    <li>Complements the Atlas web UI.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/tools/gui-and-cli/compass">← Back</a>
    <div class="xrefTitle">MongoDB - Tools - GUI & CLI - Compass</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/tools/data-move-backup/export-import">Next →</a>
    <div class="xrefTitle">Section: MongoDB - Tools - Data Move & Backup - Export & Import</div>
  </div>
</div>