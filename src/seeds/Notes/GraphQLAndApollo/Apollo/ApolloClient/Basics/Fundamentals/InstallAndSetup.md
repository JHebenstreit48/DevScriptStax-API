## Apollo Client Install and Setup

---

### Overview

Apollo Client is typically configured once near the root of an application.

This is where the client instance and cache are created, and the app is wrapped so components can access GraphQL data.

---

### ApolloProvider (Concept)

ApolloProvider makes the Apollo Client available to the entire application.

This enables consistent access to queries, mutations, and cache features throughout the UI.
