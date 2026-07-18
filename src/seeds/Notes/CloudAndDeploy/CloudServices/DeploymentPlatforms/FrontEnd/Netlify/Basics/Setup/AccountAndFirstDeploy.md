# Creating a Netlify Account

<hr class="dividerSection" />

To get started with Netlify, create an account at <a href="https://app.netlify.com/signup" target="_blank" rel="noopener noreferrer">netlify.com</a>.

Netlify supports the following sign-in methods:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">GitHub</span></li>
    <li><span class="emphasis">GitLab</span></li>
    <li><span class="emphasis">Bitbucket</span></li>
    <li><span class="emphasis">Google</span></li>
    <li><span class="emphasis">Email</span></li>
    <li><span class="emphasis">SSO</span> (Single Sign-On)</li>
  </ul>
</div>

Signing in with a Git provider such as GitHub, GitLab, or Bitbucket is recommended since Netlify deploys directly from your repositories.

<hr class="dividerSection" />

## Importing and Deploying Your First Project

<hr class="dividerSection" />

Netlify combines connecting a repository and deploying it into a single flow, rather than treating them as separate steps.

<div class="centeredNumberedList">

1. <span class="emphasis">Add a New Project</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>From your team's Projects page, open the <span class="emphasis">Add new project</span> menu.</li>
    <li>Select <span class="emphasis">Import an existing project</span>.</li>
  </ul>
</div>

2. <span class="emphasis">Choose and Authorize Your Git Provider</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Select the Git provider your project is hosted on, such as GitHub, GitLab, or Bitbucket.</li>
    <li>Follow the authorization prompts to allow Netlify access to your repositories.</li>
  </ul>
</div>

3. <span class="emphasis">Select Your Repository</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Choose the repository you want to deploy from the list.</li>
    <li>Select the branch you want Netlify to deploy from, typically <span class="codeSnip">main</span> or <span class="codeSnip">master</span>.</li>
  </ul>
</div>

4. <span class="emphasis">Configure Build Settings</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Netlify auto-detects your project's framework and suggests a <span class="emphasis">build command</span> and <span class="emphasis">publish directory</span>.</li>
    <li>Adjust these values if the auto-detected settings are incorrect.</li>
    <li>Add any needed environment variables.</li>
  </ul>
</div>

5. <span class="emphasis">Deploy</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Click <span class="emphasis">Deploy site</span> to start the deployment.</li>
    <li>Netlify will clone your repository and run the build command.</li>
    <li>You can monitor build progress from the Deploys tab.</li>
    <li>Once the build completes successfully, your site will be live at a <span class="codeSnip">.netlify.app</span> URL.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Auto-Deploy on Push

<hr class="dividerSection" />

Once your project is connected, Netlify automatically redeploys it every time you push changes to the connected branch.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>No manual deployment steps are needed after the initial setup.</li>
    <li>You can also trigger manual deploys from the CLI using <span class="codeSnip">netlify deploy --prod</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/cloud-services/deployment/front-end/netlify/basics/fundamentals/pricing-plans">← Back</a>
    <div class="xrefTitle">Section: Netlify → Fundamentals → Pricing & Plans</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/cloud-services/deployment/front-end/netlify/basics/setup/custom-domain-https">Next →</a>
    <div class="xrefTitle">Netlify → Setup → Custom Domain & HTTPS</div>
  </div>
</div>