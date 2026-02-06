## GraphQL Subscriptions

---

### Overview

Subscriptions are used for real-time updates.

Instead of a single request and response, subscriptions keep a connection open so the server can push updates when events occur.

---

### Common Use Cases

<div class="fullWidthBullet">

🔹 Chat messages and live feeds
🔹 Notifications
🔹 Real-time dashboards
🔹 Collaboration updates

</div>

---

### Notes

Subscriptions are a GraphQL feature.

The transport mechanism (such as WebSockets or SSE) depends on the server/client implementation and is usually documented in tool-specific sections.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/graphql/basics/schema-execution/resolvers">← Back</a>
    <div class="xrefTitle">Schema & Execution</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/graphql/basics/real-time/variables-fragments">Next →</a>
    <div class="xrefTitle">Variables & Fragments</div>
  </div>
</div>