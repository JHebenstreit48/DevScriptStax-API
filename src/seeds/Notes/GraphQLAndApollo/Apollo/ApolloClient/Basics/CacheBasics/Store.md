## Apollo Client Cache Store

---

### Overview

Apollo Client includes a caching layer that can store previously fetched GraphQL results.

Caching helps improve performance and reduce repeated network requests.

---

### InMemoryCache (Concept)

InMemoryCache is the default cache implementation.

It stores GraphQL results in memory so previously fetched data can be returned quickly without refetching.
