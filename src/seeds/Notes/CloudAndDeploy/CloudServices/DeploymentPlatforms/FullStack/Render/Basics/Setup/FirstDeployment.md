# First Deployment

<hr class="dividerSection" />

## Deploying Your First Project

<hr class="dividerSection" />

After connecting your Git provider, you can create a new service and deploy your first project directly from a repository.

<div class="centeredNumberedList">

1. <span class="emphasis">Create a New Service</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>From the Render dashboard click <span class="emphasis">New</span> and select the service type that matches your project.</li>
    <li>Common options include <span class="emphasis">Web Service</span> for server-side apps and <span class="emphasis">Static Site</span> for front-end only projects.</li>
  </ul>
</div>

2. <span class="emphasis">Connect Your Repository</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Select the Git provider you connected during account setup.</li>
    <li>Choose the repository you want to deploy from the list.</li>
    <li>Select the branch you want Render to deploy from — typically <span class="codeSnip">main</span> or <span class="codeSnip">master</span>.</li>
  </ul>
</div>

3. <span class="emphasis">Configure Your Service</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Give your service a name.</li>
    <li>Select the region closest to your users.</li>
    <li>Set the runtime environment — for example Node, Python, or Ruby.</li>
    <li>Set the <span class="emphasis">build command</span> — for example <span class="codeSnip">npm install</span>.</li>
    <li>Set the <span class="emphasis">start command</span> — for example <span class="codeSnip">node server.js</span>.</li>
  </ul>
</div>

4. <span class="emphasis">Select a Plan</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Choose the <span class="emphasis">Free</span> plan for testing and small projects.</li>
    <li>Choose a paid plan for production workloads that require consistent performance.</li>
  </ul>
</div>

5. <span class="emphasis">Deploy</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Click <span class="emphasis">Create Web Service</span> or <span class="emphasis">Create Static Site</span> to start the deployment.</li>
    <li>Render will pull your code from the repository and run the build command.</li>
    <li>You can watch the build logs in real time from the dashboard.</li>
    <li>Once the build completes successfully your service will be live at a <span class="codeSnip">.onrender.com</span> URL.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Auto-Deploy on Push

<hr class="dividerSection" />

Once your service is set up, Render automatically redeploys it every time you push changes to the connected branch.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>No manual deployment steps are needed after the initial setup.</li>
    <li>Auto-deploy can be disabled from the service settings if you prefer to trigger deploys manually.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/render/basics/setup/account">← Back</a>
    <div class="xrefTitle">Render → Setup → Account</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/render/basics/setup/custom-domain">Next →</a>
    <div class="xrefTitle">Render → Setup → Custom Domain</div>
  </div>
</div>