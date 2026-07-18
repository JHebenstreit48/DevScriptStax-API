# Introduction to Conditionals

<hr class="dividerSection" />

<span class="emphasis">Conditional statements</span> allow a JavaScript program to make decisions and execute code blocks based on whether a condition evaluates as <span class="secondEmphasis">true</span> or <span class="secondEmphasis">false</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Think of them as checkpoints that control the flow of logic.</li>
    <li>These are essential for branching logic, like what to show or do depending on user input, values, or events.</li>
  </ul>
</div>

<hr class="dividerSection" />

## The if Statement

<hr class="dividerSection" />

The <span class="codeSnip">if</span> statement is the most basic form of conditional logic.

```js  
let age = 18;

if (age >= 18) {
  console.log("You can vote.");
}
```

The condition inside the parentheses is evaluated, if it's true, the code inside the curly braces runs.

<hr class="dividerSection" />

## The else Statement

<hr class="dividerSection" />

You can pair an <span class="codeSnip">else</span> with an <span class="codeSnip">if</span> to define an alternate block of code.

```js  
let age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

<hr class="dividerSection" />

## The else if Clause

<hr class="dividerSection" />

Use <span class="codeSnip">else if</span> to check multiple conditions in sequence.

```js  
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}
```

JavaScript evaluates each condition in order and stops at the first match.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">else if</span> is not a distinct keyword in JavaScript, it is an <span class="codeSnip">if</span> statement nested directly inside an <span class="codeSnip">else</span> block.</li>
    <li>Chaining several <span class="codeSnip">else if</span> clauses is really just nesting another <span class="codeSnip">if</span> inside each preceding <span class="codeSnip">else</span>, the language simply allows the inner braces to be omitted for readability.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Comparison Operators in Conditionals

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">==</span></td>
      <td class="tableCell">Equal to, loose</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">===</span></td>
      <td class="tableCell">Equal to, strict</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">!=</span></td>
      <td class="tableCell">Not equal to, loose</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">!==</span></td>
      <td class="tableCell">Not equal to, strict</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&gt;</span></td>
      <td class="tableCell">Greater than</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&lt;</span></td>
      <td class="tableCell">Less than</td>
    </tr>
  </tbody>
</table>

```js  
"5" == 5    // true
"5" === 5   // false
5 != "5"    // false
5 !== "5"   // true
7 > 3       // true
3 < 7       // true
```

<hr class="dividerSection" />

## Logical Operators in Conditionals

<hr class="dividerSection" />

You can combine multiple conditions using logical operators.

```js  
let age = 25;
let hasID = true;

if (age >= 21 && hasID) {
  console.log("Access granted.");
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use <span class="codeSnip">&&</span> for AND, <span class="codeSnip">||</span> for OR, and <span class="codeSnip">!</span> for NOT.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Conditional Logic with the Ternary Operator

<hr class="dividerSection" />

The ternary operator is a concise way to write conditionals in a single line.

```js  
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
```

It follows the structure:

<span class="codeSnip">condition ? valueIfTrue : valueIfFalse;</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>This is useful for quick logic inside variables, return statements, or inline rendering.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Best Practices

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Favor <span class="codeSnip">===</span> over <span class="codeSnip">==</span> to avoid unexpected type coercion.</li>
    <li>Use braces <span class="codeSnip">{}</span> even for single-line <span class="codeSnip">if</span> blocks for clarity.</li>
    <li>Group complex conditions with parentheses to clarify evaluation order.</li>
    <li>Do not nest too many <span class="codeSnip">else if</span> blocks, use <span class="codeSnip">switch</span> or refactor if needed.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/core/methods">← Back</a>
    <div class="xrefTitle">JavaScript → Basics → Core Concepts → Built-in Methods</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/core/loops">Next →</a>
    <div class="xrefTitle">JavaScript → Basics → Core Concepts → Loops</div>
  </div>
</div>