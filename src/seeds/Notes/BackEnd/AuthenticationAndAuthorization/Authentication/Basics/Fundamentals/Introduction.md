# Introduction to Authentication

**Authentication** (AuthN) is the process of **verifying that someone is who they claim to be**.

- It typically starts with an **identifier**, like a username or email.
- Followed by a **proof of identity**, such as a password, security token, fingerprint, or facial recognition scan.
- If the user fails authentication, systems commonly respond with an HTTP **401 Unauthorized** status code.

---

## 🔐 Why It Matters

- Authentication is a **core building block of application security**.
- It ensures that only valid users can access protected resources or systems.
- It’s the first line of defense against unauthorized access, identity theft, and system compromise.

---

## 💡 Common Authentication Methods

- **Username + Password** — The most basic and widely used method.
- **Multi-Factor Authentication (MFA)** — Requires two or more types of credentials: something you know (password), something you have (device), or something you are (biometrics).
- **Single Sign-On (SSO)** — Allows users to authenticate once and access multiple applications.
- **Token-Based** — Uses access tokens like JWTs (JSON Web Tokens) or opaque tokens.
- **Certificate-Based / Passwordless** — Authentication through digital certificates, biometric devices, or hardware keys (like YubiKey or WebAuthn).

---

## 🧠 Authentication vs Authorization

- **Authentication (AuthN)**: Confirms *who* the user is.
- **Authorization (AuthZ)**: Defines *what* the authenticated user is allowed to do.

Think of it like a bouncer at a nightclub:
- AuthN checks your ID.
- AuthZ checks if your name is on the VIP list.

---

## ✅ Summary

- Authentication is the **first step** in securing your app or system.
- It ensures identity is verified before granting access.
- Follow-up steps like **authorization**, **session management**, and **secure storage** are layered on top.

> Next: Learn about session vs token-based methods, stateless authentication, and MFA.
