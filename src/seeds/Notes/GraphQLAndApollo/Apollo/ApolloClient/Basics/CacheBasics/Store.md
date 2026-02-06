## Apollo Client Cache Store

---

### Overview

Apollo Client includes a caching layer that can store previously fetched GraphQL results.

Caching helps improve performance and reduce repeated network requests.

---

### InMemoryCache (Concept)

InMemoryCache is the default cache implementation.

It stores GraphQL results in memory so previously fetched data can be returned quickly without refetching.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apollo/client/basics/mutations/optimistic-ui">← Back</a>
    <div class="xrefTitle">Mutations</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apollo/client/basics/cache/normalization">Next →</a>
    <div class="xrefTitle">Normalization</div>
  </div>
</div>