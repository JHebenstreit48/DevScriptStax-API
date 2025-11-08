<br>

---
## Introduction
---

You’re about to begin using Firebase in your app.  
This guide walks you through installing the SDK, setting up your environment, and initializing the app—so you’re ready to build features confidently.

---

### 1. Install the Firebase SDK

Install the client-side SDK for your frontend or mobile app.

```bash
npm i firebase
```

**Notes:**

- Use <span class="codeSnip">-D</span> (or <span class="codeSnip">--save-dev</span>) only if you are installing for build tools, not runtime.  
- Global installs (<span class="codeSnip">npm i -g</span>) are rarely needed for SDKs bound to your app.  
- Make sure your project’s <span class="codeSnip">package.json</span> and lock file are committed so others install identical versions.

---

### 2. Configure Environment

Create or update your <span class="codeSnip">.env</span> (or other secrets file) for safe configuration.

Typical variables you might set:

```ini
VITE_FIREBASE_API_KEY=your_api_key  
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain  
VITE_FIREBASE_PROJECT_ID=your_project_id  
```

**Remember:**

- Never commit real credentials—use environment variables or secret management.  
- In CI/CD, configure these values in your deployment environment.  
- The <span class="codeSnip">projectId</span> ties into your Firebase project; the API key identifies your app but still should be treated carefully.

---

### 3. Initialize the Firebase App

Create a reusable initialization module for your client-side app.

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // Add other fields as needed (storageBucket, messagingSenderId, appId, etc.)
};

const app = initializeApp(firebaseConfig);

export default app;
```

**Tips:**

- Keep all Firebase initialization in one place to avoid duplicate apps.  
- For multiple Firebase projects (dev/stage/prod), swap config values via env vars.  
- Do not hardcode secrets directly in source.

---

## Next Steps

From here you can:

- Enable and configure **Authentication**.  
- Set up **Firestore** or **Realtime Database**.  
- Configure **Storage** and basic security rules.  

Each feature will build on this initialization.
