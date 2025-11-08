<br>

---
## Firebase Admin SDK Basics
---

The Firebase Admin SDK allows server-side access to Firebase services with elevated privileges.  
Use it for data migrations, import/export scripts, or backend tools that require full administrative access.

---

### 1. Install Backend Dependencies

Install the Admin SDK and related tools.

```bash
npm i firebase-admin  
npm i -D ts-node fast-glob marked  
```

**Notes:**

- <span class="codeSnip">firebase-admin</span> is a runtime dependency.  
- <span class="codeSnip">ts-node</span>, <span class="codeSnip">fast-glob</span>, and <span class="codeSnip">marked</span> are typical dev tools for scripting.  
- Adjust dependencies as needed for your workflow.

---

### 2. Initialize the Admin SDK

Typical initialization using a service account JSON (stored as an environment variable).

```ts
import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

if (!serviceAccountJson) {
  throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON");
}

const app = getApps().length
  ? getApp()
  : initializeApp({
      credential: cert(JSON.parse(serviceAccountJson))
    });

const db = getFirestore(app);

export { app, db };
```

**Key Points:**

- Never hardcode credentials.  
- Store JSON securely via environment variables or secret managers.  
- Reuse a single app instance to prevent duplicate initialization.

---
### 3. Connectivity / Health Check Script
---

Quickly verify Firestore access before running full scripts.

```ts
import { db } from "./admin"; // from initialization file

async function pingFirestore() {
  const snap = await db.collection("posts").limit(1).get();
  console.log(`Ping successful — ${snap.size} document(s) found.`);
}

pingFirestore().catch((err) => {
  console.error("Ping failed:", err);
  process.exit(1);
});
```

```bash
npm run build  
npm run ping:firebase  
```

This ensures credentials and network access are valid before import/export jobs.

---

**When to Use the Admin SDK**

- Server-side imports or exports.  
- Automated scheduled jobs (cron, CI/CD, or Cloud Run).  
- Secure user management or batch operations.  
