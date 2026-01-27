## GraphQL Resolvers

---

### Overview

Resolvers are functions that provide the actual data for fields defined in the schema.

When a client requests fields, the server runs resolver logic to fetch or compute values.

---

### Resolver Parameters (4 Positional Parameters)

A resolver function receives these positional parameters:

<div class="fullWidthBullet">

🔹 <span class="codeSnip">parent</span>
🔹 <span class="codeSnip">args</span>
🔹 <span class="codeSnip">context</span>
🔹 <span class="codeSnip">info</span>

</div>

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/graphql/basics/schema-execution/schema">← Back</a>
    <div class="xrefTitle">Schema</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/graphql/basics/real-time/subscriptions">Next →</a>
    <div class="xrefTitle">Real-Time</div>
  </div>
</div>