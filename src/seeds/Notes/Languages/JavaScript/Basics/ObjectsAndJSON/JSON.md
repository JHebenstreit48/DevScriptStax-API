# What Is JSON?

<hr class="dividerSection" />

<span class="emphasis">JSON</span> (JavaScript Object Notation) is a lightweight format for storing and exchanging data. It is based on JavaScript object syntax but follows stricter rules to ensure universal compatibility.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>JSON is widely used to send data between a server and a web app.</li>
    <li>It is easy for both humans and machines to read and write.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Key Differences Between JSON and JavaScript Objects

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### JavaScript Objects

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Rule</th>
      <th class="tableCellHeader">JavaScript Objects</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><strong>Quotes around keys</strong></td>
      <td class="tableCell">❌ Optional (if valid)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Quotes around string values</strong></td>
      <td class="tableCell">✅ Required</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Quotes around number/boolean/null</strong></td>
      <td class="tableCell">❌ Not allowed</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Valid key names</strong></td>
      <td class="tableCell">Any valid identifier (or quoted string)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Trailing commas</strong></td>
      <td class="tableCell">Allowed in JS</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### JSON

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Rule</th>
      <th class="tableCellHeader">JSON</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><strong>Quotes around keys</strong></td>
      <td class="tableCell">✅ Always required (double quotes only)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Quotes around string values</strong></td>
      <td class="tableCell">✅ Required</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Quotes around number/boolean/null</strong></td>
      <td class="tableCell">❌ Not allowed</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Valid key names</strong></td>
      <td class="tableCell">Must be quoted strings</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Trailing commas</strong></td>
      <td class="tableCell">❌ Not allowed in JSON</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## JavaScript vs JSON Objects

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### JavaScript Object

<hr class="dividerSubsection1" />

```js
let jsObj = {
  name: "Alice",
  age: 30,
  isMember: true,
};
```

<hr class="dividerSubsection1" />

### JSON Equivalent

<hr class="dividerSubsection1" />

```js
{
  "name": "Alice",
  "age": 30,
  "isMember": true
}
```

<hr class="dividerSubsection1" />

### Invalid JSON

<hr class="dividerSubsection1" />

```js
{
  name: "Alice"; // error: missing quotes around key
}
```

<hr class="dividerSection" />

## JSON Keys: Why Double Quotes?

<hr class="dividerSection" />

JSON is a strict data format meant for interoperability between systems and languages. Double quotes ensure that parsers in any programming language can reliably read the data.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>JavaScript is more relaxed and developer-friendly.</li>
    <li>JSON must be predictable, so it enforces stricter rules.</li>
  </ul>
</div>

<hr class="dividerSection" />

## JSON Values: When Are Quotes Required?

<hr class="dividerSection" />

Only strings need quotes. Numbers, booleans, arrays, objects, and null do not.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Value Type</th>
      <th class="tableCellHeader">Quotes Required?</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">String</td>
      <td class="tableCell">✅ Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Number</td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Boolean</td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">null</td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Array</td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Object</td>
      <td class="tableCell">❌ No</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Value Type</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">String</td>
      <td class="tableCell"><span class="codeSnip">"hello"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Number</td>
      <td class="tableCell"><span class="codeSnip">42</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Boolean</td>
      <td class="tableCell"><span class="codeSnip">true</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">null</td>
      <td class="tableCell"><span class="codeSnip">null</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Array</td>
      <td class="tableCell"><span class="codeSnip">[1, 2, 3]</span> or <span class="codeSnip">["a", "b"]</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Object</td>
      <td class="tableCell"><span class="codeSnip">{ "a": 1 }</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Common Pitfall: Numbers in Quotes

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Correct

<hr class="dividerSubsection1" />

```js
{
  "quantity": 70
}
```

<hr class="dividerSubsection1" />

### Incorrect — Value Becomes a String

<hr class="dividerSubsection1" />

```js
{
  "quantity": "70"
}
```

Even though this is valid JSON, using quotes turns the number into a string which can break math logic.

<hr class="dividerSection" />

## JSON.stringify()

<hr class="dividerSection" />

Converts a JavaScript object into a JSON-formatted string.  
Useful when you want to store or transmit structured data.

```js
let obj = {
  name: "Alice",
  age: 30,
};

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);
// Output: '{"name":"Alice","age":30}'
```

Common use cases:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Sending data in a POST request.</li>
    <li>Saving structured data in localStorage.</li>
    <li>Logging full object structures.</li>
    <li>Only enumerable own properties are included — functions are excluded.</li>
    <li>Embedding server-side data into an HTML template using <span class="codeSnip">${JSON.stringify(items)}</span> inside a <span class="codeSnip">&lt;script&gt;</span> tag — makes that data available to client-side JavaScript without a separate request.
      <ul class="diamondBullets fullWidthBullet">
        <li><span class="codeSnip">items</span> in this example is an array of data from the server that gets converted into a string and embedded directly into the HTML.</li>
      </ul>
</li>
  </ul>
</div>

<hr class="dividerSection" />

## JSON.parse()

<hr class="dividerSection" />

Takes a JSON string and turns it back into a JavaScript object.

```js
let jsonStr = '{"name":"Alice","age":30}';
let parsedObj = JSON.parse(jsonStr);

console.log(parsedObj.name); // "Alice"
```

Common use cases:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Reading data from an API response.</li>
    <li>Loading data from storage.</li>
    <li>Converting static config into usable variables.</li>
    <li><span class="codeSnip">JSON.parse()</span> will throw an error if the string is not properly formatted JSON.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>JSON is stricter than JavaScript objects.</li>
    <li>Keys must use double quotes.</li>
    <li>Only string values need quotes.</li>
    <li>Use <span class="codeSnip">JSON.stringify()</span> to convert JavaScript to JSON.</li>
    <li>Use <span class="codeSnip">JSON.parse()</span> to convert JSON to JavaScript.</li>
    <li>Avoid quoting numbers unless you intend to treat them as strings.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/objects-and-json/utils-and-patterns">← Back</a>
    <div class="xrefTitle">Objects & JSON - Utilities and Patterns</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/dom/dom-manipulation">Next →</a>
    <div class="xrefTitle">Section: DOM and Events - DOM Manipulation</div>
  </div>
</div>