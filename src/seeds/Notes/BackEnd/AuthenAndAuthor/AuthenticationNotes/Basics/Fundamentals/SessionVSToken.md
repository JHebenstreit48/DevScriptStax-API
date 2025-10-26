# Session vs Token Authentication

When building web apps, two popular ways to manage logged-in users are **session-based** and **token-based** authentication. Each has unique benefits depending on app architecture and user needs.

---

## 🔒 Session-Based Authentication

- The server creates and stores a **session** after successful login.
- A **session ID** is sent to the client via an HTTP-only cookie.
- On each request, the browser sends the cookie, and the server retrieves the session data using that ID.

**Key traits:**
- Requires **server-side memory** or database for active sessions.
- Easy to revoke (logout = delete session).
- Commonly used in traditional multi-page applications.

---

## 🔑 Token-Based Authentication

- The server issues a **signed token** (e.g., JWT) to the client after login.
- The token is stored client-side (in localStorage, cookies, etc.).
- Every request includes the token in the header — usually as a Bearer token.

**Key traits:**
- **Stateless**: no server-side session storage.
- Harder to revoke once issued.
- Common in SPAs, mobile apps, and public APIs.

---

## 📊 Comparison Table: Storage & Scaling

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Property</th>
      <th class="tableCellHeader">Session-Based</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Storage</td>
      <td class="tableCell">Stored server-side (in-memory or DB)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Scalability</td>
      <td class="tableCell">Harder to scale; requires sticky sessions or shared DB</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Revocation</td>
      <td class="tableCell">Immediate — just delete the session</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Use Case</td>
      <td class="tableCell">Traditional server-rendered apps</td>
    </tr>
  </tbody>
</table>

<br>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Property</th>
      <th class="tableCellHeader">Token-Based</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Storage</td>
      <td class="tableCell">Stored client-side (e.g., localStorage)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Scalability</td>
      <td class="tableCell">Highly scalable — no server storage required</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Revocation</td>
      <td class="tableCell">Hard to revoke — requires token expiry or blacklist</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Use Case</td>
      <td class="tableCell">APIs, SPAs, mobile apps</td>
    </tr>
  </tbody>
</table>

---

## 🧠 Which One Should You Use?

Use **sessions** when:
- You need easy revocation (e.g., forced logout)
- You’re building a traditional server-rendered web app
- Your app is not heavily API-driven

Use **tokens** when:
- You're working with APIs or microservices
- You want stateless authentication for better scalability
- You're building a mobile app or SPA

---

## ✅ Summary

- **Session-based authentication** stores user data on the server; great for apps that need tighter server control.
- **Token-based authentication** stores data client-side; great for distributed systems and APIs.
- Consider a **hybrid approach** (e.g., use JWTs for API access, but manage them via short-lived session cookies for better security).

> Coming up next: Stateful vs Stateless authentication.
