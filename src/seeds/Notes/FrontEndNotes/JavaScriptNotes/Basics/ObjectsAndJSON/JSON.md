<br>

---

### What Is JSON?

---

<span class="emphasis">JSON</span> (JavaScript Object Notation) is a lightweight format for storing and exchanging data.  
It’s based on JavaScript object syntax but follows stricter rules to ensure universal compatibility.

- JSON is widely used to send data between a server and a web app  
-  Easy for both humans and machines to read and write

---

### Key Differences Between JSON and JavaScript Objects

---

### JavaScript Objects – Differences from JSON

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

### JSON – Differences from JavaScript Objects

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

---

### Example Comparison

---

#### JavaScript object:

```javascript
let jsObj = {
  name: "Alice",
  age: 30,
  isMember: true
};
```

#### JSON equivalent:

```javascript
{
  "name": "Alice",
  "age": 30,
  "isMember": true
}
```

#### Invalid JSON (missing quotes):

```javascript
{
  name: "Alice"  // ❌ error: missing quotes around key
}
```

---

### JSON Keys: Why Double Quotes?

---

JSON is a strict data format meant for interoperability between systems and languages.  
Double quotes ensure that parsers in any programming language can reliably read the data.

- JavaScript is more relaxed and developer-friendly.  
- JSON must be predictable, so it enforces stricter rules.

---

### JSON Values: When Are Quotes Required?

---

✅ Only strings need quotes  
❌ Numbers, booleans, arrays, objects, or null do NOT need quotes

#### Quotes Required?

<table class="notesTable narrowTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Value Type</th>
      <th class="tableCellHeader">Quotes Required?</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><strong>String</strong></td>
      <td class="tableCell">✅ Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Number</strong></td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Boolean</strong></td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>null</strong></td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Array</strong></td>
      <td class="tableCell">❌ No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Object</strong></td>
      <td class="tableCell">❌ No</td>
    </tr>
  </tbody>
</table>

#### Example Values

<table class="notesTable narrowTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Value Type</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><strong>String</strong></td>
      <td class="tableCell">"hello"</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Number</strong></td>
      <td class="tableCell">42</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Boolean</strong></td>
      <td class="tableCell">true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>null</strong></td>
      <td class="tableCell">null</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Array</strong></td>
      <td class="tableCell">[1, 2, 3] or ["a", "b"]</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Object</strong></td>
      <td class="tableCell">{ "a": 1 }</td>
    </tr>
  </tbody>
</table>

---

### Common Pitfall: Numbers in Quotes

---

#### ✅ Correct:

```javascript
{
  "quantity": 70
}
```

#### ❌ Incorrect (value is now a string):

```js
{
  "quantity": "70"
}
```

Even though this is valid JSON, using quotes turns the number into a string, which can break math logic.

---

### JSON.stringify()

---

Converts a JavaScript object into a JSON-formatted string.  
Useful when you want to store or transmit structured data.

```javascript
let obj = {
  name: "Alice",
  age: 30
};

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);  
// Output: '{"name":"Alice","age":30}'
```

Common use cases:  

- Sending data in a POST request
- Saving structured data in localStorage
- Logging full object structures

⚠️ Only enumerable, own properties get included (functions are excluded).

---

### JSON.parse()

---

Takes a JSON string and turns it back into a JavaScript object.

```javascript
let jsonStr = '{"name":"Alice","age":30}';
let parsedObj = JSON.parse(jsonStr);

console.log(parsedObj.name); // "Alice"
```

Common use cases:  

- Reading data from an API response
- Loading data from storage
- Converting static config into usable variables

⚠️ JSON.parse() will throw an error if the string isn’t properly formatted JSON.

---

### Summary

JSON is stricter than JS objects  
Keys must use double quotes  
Only string values need quotes  
Use <span class="codeSnip">JSON.stringify()</span> to convert JS → JSON  
Use <span class="codeSnip">JSON.parse()</span> to convert JSON → JS  
Avoid quoting numbers unless you intend to treat them as strings

---
