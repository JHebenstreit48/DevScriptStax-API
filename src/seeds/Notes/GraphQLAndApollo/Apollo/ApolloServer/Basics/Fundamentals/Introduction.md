## Apollo Server (Introduction)

---

### Overview

Apollo Server is a community-driven, open-source, spec-compliant GraphQL server used to build GraphQL APIs.

It provides the backend layer responsible for defining a GraphQL schema and resolving client requests against underlying data sources.

---

<div class="fullWidthBullet">

🔹 Connects GraphQL schemas to data sources
🔹 Works with Node.js and popular frameworks (Express, Koa, etc.)
🔹 Handles queries, mutations, and subscriptions
🔹 Integrates well with Apollo Client

</div>

---

### What Apollo Server Helps With

Apollo Server focuses on the **server-side GraphQL API**, including:

- Exposing a GraphQL endpoint
- Defining the schema that describes available data and operations
- Implementing resolvers that fetch or compute requested fields
- Integrating with databases, REST APIs, and other backend services
- Structuring a GraphQL API in a scalable and maintainable way

---

### Related Topics

Apollo Server handles the backend GraphQL layer.

Client-side concerns such as caching, UI integration, and hooks (for example Apollo Client, InMemoryCache, and React hooks) are covered in the Apollo Client section.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apollo/client/advanced/tooling/devtools">← Back</a>
    <div class="xrefTitle">Tooling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apollo/server/basics/fundamentals/install-setup">Next →</a>
    <div class="xrefTitle">Install & Setup</div>
  </div>
</div>