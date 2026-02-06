## Response Cache (Performance)

---

### Overview

Caching is a common way to improve performance in GraphQL APIs.

Caching can reduce repeated work for identical or similar requests.

---

### Query Caching (High-Level)

Caching strategies typically focus on:

- Reducing repeated resolver/database work
- Returning cached results for repeated operations
- Controlling cache lifetime to avoid stale data

---

### Query Batching (High-Level)

Batching groups multiple requests or operations together to reduce overhead.

This can improve efficiency when a client triggers many related requests.

---

### Monitoring and Logging (Performance Context)

Performance improvements are usually paired with:

- Monitoring slow operations
- Logging failures and latency trends
- Identifying high-cost resolvers and frequent queries

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apollo/server/advanced/cache-hints/cache-hints">← Back</a>
    <div class="xrefTitle">Cache Hints</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apollo/server/advanced/observability/studio-metrics">Next →</a>
    <div class="xrefTitle">Observability</div>
  </div>
</div>