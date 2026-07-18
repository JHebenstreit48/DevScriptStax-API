# What Is EJS?

<hr class="dividerSection" />

EJS stands for Embedded JavaScript, a templating engine used with Express to generate HTML that changes based on data, rather than serving static, fixed pages.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>You write mostly normal HTML and drop JavaScript directly into it using special tags.</li>
    <li>Express processes the <span class="codeSnip">.ejs</span> file on the server, running the embedded JavaScript and replacing the tags with real values.</li>
    <li>The browser only ever receives finished, plain HTML, it never sees or runs any EJS syntax.</li>
    <li><span class="codeSnip">.ejs</span> files live in the View layer of an MVC-style application, populated with whatever data the route handler passes in.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Setting the Views Folder

<hr class="dividerSection" />

Before Express can render any <span class="codeSnip">.ejs</span> files, it needs to know which folder to look in, configured through Express's built-in <span class="codeSnip">views</span> setting.

```js  
app.set('views', 'views')
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The first argument, <span class="codeSnip">'views'</span>, is the name of the built-in Express setting itself.</li>
    <li>The second argument is the value being assigned to that setting, in this case the folder name to look in.</li>
    <li>The folder does not have to be named <span class="codeSnip">views</span>, that is simply Express's own default convention.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Setting the View Engine

<hr class="dividerSection" />

Express also needs to know which templating engine to use when rendering views, set with a second <span class="codeSnip">app.set()</span> call.

```js  
app.set('view engine', 'ejs')
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The first argument, <span class="codeSnip">'view engine'</span>, is the built-in Express setting name for which templating engine to use.</li>
    <li>The second argument is the name of that engine, in this case <span class="codeSnip">ejs</span>.</li>
    <li>Other popular choices include <span class="emphasis">Pug</span> and <span class="emphasis">Handlebars</span>, each with its own syntax and features.</li>
  </ul>
</div>

Together, both settings give the full setup needed before any view can be rendered:

```js  
app.set('views', 'views')
app.set('view engine', 'ejs')
```

<hr class="dividerSection" />

## Fixed vs. Customizable Arguments

<hr class="dividerSection" />

Both <span class="codeSnip">app.set()</span> calls above follow the same pattern, but the first and second arguments behave very differently, and mixing them up is an easy mistake to make.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Argument</th>
      <th class="tableCellHeader">Fixed or Customizable</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">First argument in both calls, <span class="codeSnip">'views'</span> and <span class="codeSnip">'view engine'</span></td>
      <td class="tableCell">Fixed. These are Express's own built-in setting names and cannot be renamed or replaced with something else.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Second argument in <span class="codeSnip">app.set('views', ...)</span></td>
      <td class="tableCell">Customizable. This is the actual folder name on disk, and can be named anything, <span class="codeSnip">views</span> is only Express's default convention.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Second argument in <span class="codeSnip">app.set('view engine', ...)</span></td>
      <td class="tableCell">Constrained. This must match a real templating engine Express recognizes, such as <span class="codeSnip">ejs</span>, <span class="codeSnip">pug</span>, or <span class="codeSnip">hbs</span>, it is not an arbitrary string like the folder name is.</td>
    </tr>
  </tbody>
</table>

In short, the first argument names *what setting is being configured* and never changes, while the second argument supplies *the value* for that setting, and how much freedom you have with that value depends on which setting it is.

<hr class="dividerSection" />

## EJS Tag Syntax

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Tag</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&lt;% %&gt;</span></td>
      <td class="tableCell">Runs JavaScript logic, such as a loop or an if-statement, without outputting anything</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&lt;%= %&gt;</span></td>
      <td class="tableCell">Outputs a value, automatically escaping it for safety</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&lt;%- %&gt;</span></td>
      <td class="tableCell">Outputs raw, unescaped HTML</td>
    </tr>
  </tbody>
</table>

Escaping matters for security, since it prevents injected HTML or scripts from user-provided data.

<span class="codeSnip">&lt;%- %&gt;</span> is used intentionally, only when the raw HTML is trusted.

<hr class="dividerSection" />

## Rendering a View with Data

<hr class="dividerSection" />

The <span class="codeSnip">res.render()</span> method renders an <span class="codeSnip">.ejs</span> file and passes data into it.

```js  
app.get('/', (req, res) => {
  res.render('home', { username: 'Alex' });
});
```

That data becomes available inside the view:

```js  
&lt;h1&gt;Welcome, &lt;%= username %&gt;&lt;/h1&gt;
```

Since <span class="codeSnip">view engine</span> is already set to <span class="codeSnip">ejs</span>, Express automatically appends the <span class="codeSnip">.ejs</span> extension and looks inside the views folder, so <span class="codeSnip">res.render('home')</span> resolves to that file without needing to write the extension or folder path.

<hr class="dividerSection" />

## Loops and Conditionals in Views

<hr class="dividerSection" />

Embedded JavaScript inside <span class="codeSnip">&lt;% %&gt;</span> tags can build up markup dynamically.

```js  
&lt;ul&gt;
&lt;% items.forEach(function(item) { %&gt;
  &lt;li&gt;&lt;%= item %&gt;&lt;/li&gt;
&lt;% }); %&gt;
&lt;/ul&gt;
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Conditionals work the same way, wrapping an <span class="codeSnip">if</span> block in <span class="codeSnip">&lt;% %&gt;</span> tags to show or hide markup.</li>
    <li>The logic runs entirely on the server before the page is sent, the client never sees the loop or condition itself.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Reusing Partials

<hr class="dividerSection" />

Common markup, such as a header or footer, can be pulled into multiple views using an include.

```js  
&lt;%- include('partials/header') %&gt;
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Partials avoid repeating the same markup across every view.</li>
    <li>Includes use <span class="codeSnip">&lt;%- %&gt;</span> since the included file's HTML should render as-is, not be escaped.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Putting It All Together

<hr class="dividerSection" />

Combining static file serving, the views folder, the view engine, and a route that renders a view results in a file structured like this.

```js  
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.listen(3000);
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Static file serving and the two view settings are configured once, near the top of the file, before any routes are defined.</li>
    <li>The route handler only needs <span class="codeSnip">res.render('home')</span>, all the earlier setup is what makes that single call resolve correctly.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>EJS lets you embed JavaScript directly inside HTML to generate dynamic pages.</li>
    <li><span class="codeSnip">app.set('views', 'views')</span> tells Express which folder holds view templates.</li>
    <li><span class="codeSnip">app.set('view engine', 'ejs')</span> tells Express which templating engine to render those views with.</li>
    <li><span class="codeSnip">res.render()</span> renders a view and passes data into it.</li>
    <li>Partials let common markup be reused across multiple views.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/views-static/static-files">← Back</a>
    <div class="xrefTitle">ExpressJS → Basics → Views & Static → Static Files</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/views-static/handlebars">Next →</a>
    <div class="xrefTitle">ExpressJS → Basics → Views & Static → Handlebars</div>
  </div>
</div>