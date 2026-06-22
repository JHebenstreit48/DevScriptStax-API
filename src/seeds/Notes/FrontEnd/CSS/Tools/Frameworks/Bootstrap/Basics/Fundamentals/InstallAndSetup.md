# Setting Up Bootstrap in Your Project

<hr class="dividerSection" />

## Installation Methods

<hr class="dividerSection" />

Bootstrap can be added to a project in two main ways — via a <span class="emphasis">CDN link</span> or by <span class="emphasis">installing it locally</span> through a package manager.  

For most quick setups the CDN method requires no build tools and is the fastest way to get started.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Method</th>
      <th class="tableCellHeader">Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">CDN</span></td>
      <td class="tableCell">Quick setups, prototypes, and projects without a build pipeline</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">npm / yarn</span></td>
      <td class="tableCell">Projects using a bundler like Vite or Webpack, or a framework like React</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Method 1 — CDN Setup

<hr class="dividerSection" />

The CDN method loads Bootstrap directly from an external server. No download or installation is needed — just add the links to your HTML file.  

Visit [https://getbootstrap.com](https://getbootstrap.com) to find the latest CDN links on the getting started page.

<div class="centeredNumberedList">

1. **Add the CSS link inside the <span class="codeSnip">&lt;head&gt;</span> tag**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>This loads Bootstrap's stylesheet so all component styles and the grid system are available.</li>
    </ul>
  </div>

2. **Add the JavaScript bundle before the closing <span class="codeSnip">&lt;/body&gt;</span> tag**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>This enables interactive components like modals, dropdowns, and tooltips.</li>
      <li>The bundle version includes <span class="emphasis">Popper.js</span>, which is required for dropdowns, tooltips, and popovers.</li>
    </ul>
  </div>

</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Bootstrap Project</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>

  <!-- Your content here -->

  <!-- Bootstrap JavaScript Bundle (includes Popper.js) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

<hr class="dividerSection" />

### Method 2 — Installing via npm

<hr class="dividerSection" />

For projects using a bundler or frontend framework, Bootstrap can be installed as a package and imported directly into your CSS or JavaScript entry files.

<hr class="dividerSubsection1" />

#### Installing the Package

```shell
npm install bootstrap
```

<hr class="dividerSubsection1" />

#### Importing Bootstrap CSS

Add this at the top of your main CSS or SCSS entry file:

```css
@import "bootstrap/dist/css/bootstrap.min.css";
```

Or import it directly in your JavaScript entry file:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

<hr class="dividerSubsection1" />

#### Importing Bootstrap JavaScript

```js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

<hr class="dividerSection" />

### Verifying Bootstrap Is Working

<hr class="dividerSection" />

To confirm Bootstrap is loaded correctly, add a styled button to your HTML. If Bootstrap is active the button will render with its default styles.

```html
<button class="btn btn-primary">Bootstrap is working</button>
```

If the button appears with Bootstrap's default blue styling the setup is complete. If it renders as a plain unstyled button, the CSS link is either missing or not loading correctly.

<hr class="dividerSection" />

### Key Points to Remember

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">CSS link</span> must go inside the <span class="codeSnip">&lt;head&gt;</span> tag.</li>
    <li>The <span class="emphasis">JavaScript bundle</span> should go just before the closing <span class="codeSnip">&lt;/body&gt;</span> tag.</li>
    <li>The <span class="emphasis">bundle</span> version of the JS file includes <span class="secondEmphasis">Popper.js</span>, which is required for dropdowns, tooltips, and popovers.</li>
    <li>Always check <a href="https://getbootstrap.com">https://getbootstrap.com</a> for the <span class="emphasis">latest version number</span> to avoid using outdated CDN links.</li>
    <li>When using <span class="emphasis">npm</span>, make sure your bundler is configured to process CSS imports if you are importing Bootstrap styles in JavaScript.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Bootstrap → Fundamentals → Introduction</div>
  </div>
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/layout/grid-system">Next →</a>
    <div class="xrefTitle">Section: Bootstrap → Layout → Grid System</div>
  </div>
</div>