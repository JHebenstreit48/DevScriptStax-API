# Introduction

<hr class="dividerSection" />

MongoDB favors <span class="emphasis">flexible</span>, <span class="emphasis">document-based</span> models over rigid tables. Documents in the same collection can vary in fields and types.

<hr class="dividerSection" />

## Collections

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Collections are conceptually similar to SQL tables but with <span class="emphasis">no enforced schema</span>.</li>
    <li>Documents can have different keys and types.</li>
    <li>Related data often lives as <span class="emphasis">embedded</span> objects or arrays rather than separate tables.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Related Data: Embed vs Reference

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Embed</span> when data is accessed together frequently — read-optimized, one-to-few.</li>
    <li><span class="emphasis">Reference</span> when data is shared broadly, large, or independent.</li>
    <li>Arrays of embedded documents are common for tightly coupled sub-entities.</li>
  </ul>
</div>

<hr class="dividerSection" />

## One-to-One Relationships

<hr class="dividerSection" />

A one-to-one relationship can be modeled by:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Embedding</span> the child subdocument directly.</li>
    <li><span class="emphasis">Referencing</span> the child via its <span class="emphasis">ObjectId</span> field — values must match but field names do not need to.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/bson-objectid">← Back</a>
    <div class="xrefTitle">MongoDB - Basics - Fundamentals - BSON & ObjectId</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/create">Next →</a>
    <div class="xrefTitle">Section: MongoDB - Basics - CRUD Operations - Create</div>
  </div>
</div>