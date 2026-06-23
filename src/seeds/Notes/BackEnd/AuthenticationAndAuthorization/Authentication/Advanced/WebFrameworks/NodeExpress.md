# Authentication in Node.js and Express

<hr class="dividerSection" />

## Basic Password Protection with Middleware

<hr class="dividerSection" />

In Express, a custom middleware function can be used to protect routes by checking whether a visitor has provided the correct credentials before allowing them through.

```js
function passwordProtected(req, res, next) {
  res.set("WWW-Authenticate", 'Basic realm="Simple Todo App"')
  console.log(req.headers.authorization)
  if (req.headers.authorization == "Basic bGVhcm46amF2YXNjcmlwdA==") {
    next()
  } else {
    res.status(401).send("Authentication required")
  }
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">res.set("WWW-Authenticate", 'Basic realm="App Name"')</span> tells the browser to prompt the user for a username and password.</li>
    <li><span class="codeSnip">req.headers.authorization</span> accesses the username and password the visitor typed in.</li>
    <li>If the credentials match, <span class="codeSnip">next()</span> is called to allow the request through to the route handler.</li>
    <li>If they do not match, <span class="codeSnip">res.status(401).send("Authentication required")</span> sends back an unauthorized response.</li>
    <li><span class="codeSnip">401</span> is the HTTP status code meaning unauthorized.</li>
    <li>Using <span class="codeSnip">==</span> checks for equality rather than assigning a value.</li>
  </ul>
</div>

<hr class="dividerSection" />

## How Credentials Are Encoded

<hr class="dividerSection" />

When a user submits a username and password through HTTP Basic Authentication, the browser automatically encodes the credentials in <span class="emphasis">base64</span> format.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The encoded value appears in <span class="codeSnip">req.headers.authorization</span> as <span class="codeSnip">Basic</span> followed by a space and the base64 encoded string.</li>
    <li>You can log <span class="codeSnip">req.headers.authorization</span> to the console to see the encoded value after a user submits credentials.</li>
    <li>Whatever encoded value appears in the console after typing in your chosen username and password is what you replace the placeholder with in your if statement.</li>
    <li>Base64 is an encoding format, not encryption — it is easily decoded, which is why HTTPS is important for real security.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Testing Your Password Protection

<hr class="dividerSection" />

When testing username and password protection in the browser, the browser may remember your credentials and automatically log you in without prompting again.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>To properly test the login prompt, either quit the browser entirely and relaunch it, or open a new incognito or private window.</li>
    <li>An incognito or private window will not remember any previously entered username or password, so it will always prompt for credentials fresh.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/authentication/advanced/web-frameworks/nextjs-react">← Back</a>
    <div class="xrefTitle">Authentication → Advanced → Web Frameworks → Next.js / React</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/authentication/advanced/web-frameworks/django-flask">Next →</a>
    <div class="xrefTitle">Authentication → Advanced → Web Frameworks → Django / Flask</div>
  </div>
</div>