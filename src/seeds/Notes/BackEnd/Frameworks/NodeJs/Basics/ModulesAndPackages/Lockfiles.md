# What Is a Lockfile?

<hr class="dividerSection" />

When you install packages with npm, it creates a lockfile, usually <span class="codeSnip">package-lock.json</span>.

A lockfile helps keep installs consistent by recording the exact dependency versions that were installed.

<hr class="dividerSection" />

## Why It Exists

<hr class="dividerSection" />

Even if two projects have the same <span class="codeSnip">package.json</span>, packages can have their own dependencies, and those dependencies can change over time.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>More consistent installs across machines.</li>
    <li>Fewer "it works on my computer" dependency surprises.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Why Exact Versions Matter

<hr class="dividerSection" />

Package versions listed in <span class="codeSnip">package.json</span> are often ranges, not exact versions, which means running <span class="codeSnip">npm install</span> at different times can install different actual code even though the listed version range never changed.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Package maintainers update their packages regularly, sometimes changing syntax or options in the process.</li>
    <li>A project that worked correctly last month can behave differently today after a fresh <span class="codeSnip">npm install</span>, even with no code changes of your own.</li>
    <li><span class="codeSnip">package-lock.json</span> exists specifically to prevent this, it records the exact resolved version of every installed package, not just the range.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Common Lockfile for npm

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">package-lock.json</span></li>
  </ul>
</div>

You will often see it change when you run <span class="codeSnip">npm install</span> or update packages.

<hr class="dividerSection" />

## Forcing a Clean, Consistent Install

<hr class="dividerSection" />

If a project's dependencies become inconsistent, or if two collaborators end up with different installed versions despite an identical <span class="codeSnip">package.json</span>, a clean reinstall resolves it.

<div class="centeredNumberedList">

1. <span class="emphasis">Delete node_modules and the Lockfile</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Delete the <span class="codeSnip">node_modules</span> folder entirely.</li>
    <li>Delete <span class="codeSnip">package-lock.json</span> as well, if the goal is to fully resync against a specific, known-good lockfile rather than keep the current one.</li>
  </ul>
</div>

2. <span class="emphasis">Reinstall</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Run <span class="codeSnip">npm install</span> to reinstall everything from scratch.</li>
    <li>This can take a few minutes on a larger project, since every package is being resolved and installed fresh.</li>
  </ul>
</div>

</div>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If a specific, known-good <span class="codeSnip">package-lock.json</span> is available, such as one shared by a collaborator, replacing your own lockfile with it before running <span class="codeSnip">npm install</span> guarantees the exact same dependency versions get installed.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Lockfiles record exact installed dependency versions.</li>
    <li>They help make installs repeatable and predictable.</li>
    <li>npm's lockfile is <span class="codeSnip">package-lock.json</span>.</li>
    <li>Version ranges in <span class="codeSnip">package.json</span> can still resolve to different code over time, which is exactly what a lockfile prevents.</li>
    <li>A clean delete-and-reinstall resolves dependency drift when it does occur.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/modules-packages/package-json-scripts">← Back</a>
    <div class="xrefTitle">Node.js → Modules & Packages → package.json & Scripts</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/modules-packages/node-modules-resolution">Next →</a>
    <div class="xrefTitle">Node.js → Modules & Packages → node_modules & Resolution</div>
  </div>
</div>