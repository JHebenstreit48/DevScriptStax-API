# Bootstrap Modals

<hr class="dividerSection" />

## What Is a Modal?

<hr class="dividerSection" />

A <span class="emphasis">modal</span> is a <span class="emphasis">pop-up window</span> that appears <span class="emphasis">on top of a webpage</span> when triggered, typically by a button. It <span class="emphasis">temporarily disables interaction</span> with the rest of the website (which is usually <span class="emphasis">grayed out</span>) until the user closes the modal or interacts with its content.

Common uses for modals:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Displaying <span class="emphasis">alerts, confirmations, or additional details</span>.</li>
    <li>Collecting <span class="emphasis">user input in forms</span>.</li>
    <li>Showing <span class="emphasis">login prompts, images, or embedded media</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Basic Modal Structure

<hr class="dividerSection" />

A modal consists of several <span class="emphasis">key elements</span> that define its behavior and appearance.

```html
<button
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Open Modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="close" data-bs-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">This is the modal body content.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
```

Clicking the <span class="emphasis">Open Modal</span> button triggers the modal. Clicking <span class="emphasis">Close</span> or outside the modal <span class="emphasis">dismisses it</span>.

<hr class="dividerSection" />

## Key Bootstrap Modal Classes

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. **modal**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">base class</span> for all Bootstrap modals.</li>
    <li>Must be used with <span class="codeSnip">modal-dialog</span> and <span class="codeSnip">modal-content</span> for proper structure.</li>
  </ul>
</div>

2. **modal-dialog**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Defines the <span class="emphasis">modal's positioning and size</span>.</li>
    <li>Can be customized using <span class="codeSnip">modal-lg</span> for a large modal or <span class="codeSnip">modal-sm</span> for a small modal.</li>
  </ul>
</div>

3. **modal-content**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Wrapper for all modal content</span> — header, body, and footer.</li>
    <li>Ensures <span class="emphasis">proper padding and alignment</span> inside the modal.</li>
  </ul>
</div>

4. **modal-header**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Container for the modal title and close button.</span></li>
    <li>Often contains <span class="codeSnip">modal-title</span> and a <span class="emphasis">Close</span> button.</li>
  </ul>
</div>

5. **modal-title**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Defines the <span class="emphasis">modal's title</span>.</li>
    <li>Usually inside <span class="codeSnip">modal-header</span>.</li>
  </ul>
</div>

6. **modal-body**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Holds the <span class="emphasis">main content</span> of the modal.</li>
    <li>Can include <span class="emphasis">text, images, forms, or other UI elements</span>.</li>
  </ul>
</div>

7. **modal-footer**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Typically contains <span class="emphasis">action buttons</span> such as Close or Submit.</li>
    <li>Helps organize buttons at the <span class="emphasis">bottom of the modal</span>.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Bootstrap Modal Attributes

<hr class="dividerSection" />

<div class="centeredNumberedList">

8. **data-bs-toggle="modal"**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Tells Bootstrap <span class="emphasis">which element should trigger the modal</span>.</li>
    <li>Replaced <span class="codeSnip">data-toggle="modal"</span> in Bootstrap 5.</li>
  </ul>
</div>

9. **data-bs-target**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Specifies <span class="emphasis">which modal to open</span> when clicking a trigger element.</li>
    <li>Example: <span class="codeSnip">data-bs-target="#exampleModal"</span> opens the modal with <span class="codeSnip">id="exampleModal"</span>.</li>
    <li>Replaced <span class="codeSnip">data-target="#exampleModal"</span> in Bootstrap 5.</li>
  </ul>
</div>

10. **modal fade**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Adds a <span class="emphasis">fade-in animation</span> when opening the modal.</li>
    <li>Use <span class="codeSnip">class="modal fade"</span> to enable smooth transitions.</li>
  </ul>
</div>

11. **tabindex="-1"**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Prevents keyboard focus from interacting with background elements <span class="emphasis">while the modal is open</span>.</li>
    <li>Ensures <span class="emphasis">accessibility and proper keyboard navigation</span>.</li>
  </ul>
</div>

12. **class="close"**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Used for the <span class="emphasis">close button</span> inside the modal.</li>
    <li>Usually placed in <span class="codeSnip">modal-header</span>.</li>
    <li>Replaced by <span class="codeSnip">btn-close</span> in Bootstrap 5.</li>
  </ul>
</div>

13. **data-bs-dismiss="modal"**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Closes the modal when clicking an element with this attribute.</li>
    <li>Replaced <span class="codeSnip">data-dismiss="modal"</span> in Bootstrap 5.</li>
  </ul>
</div>

</div>

```html
<button class="btn btn-secondary" data-bs-dismiss="modal">
  Close
</button>
```

<hr class="dividerSection" />

## Bootstrap 4 vs Bootstrap 5 Modal Changes

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">Bootstrap 4</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Trigger Attribute</td>
      <td class="tableCell"><span class="codeSnip">data-toggle="modal"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Target Attribute</td>
      <td class="tableCell"><span class="codeSnip">data-target="#modalID"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Dismiss Attribute</td>
      <td class="tableCell"><span class="codeSnip">data-dismiss="modal"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Close Button Class</td>
      <td class="tableCell"><span class="codeSnip">class="close"</span></td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">Bootstrap 5</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Trigger Attribute</td>
      <td class="tableCell"><span class="codeSnip">data-bs-toggle="modal"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Target Attribute</td>
      <td class="tableCell"><span class="codeSnip">data-bs-target="#modalID"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Dismiss Attribute</td>
      <td class="tableCell"><span class="codeSnip">data-bs-dismiss="modal"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Close Button Class</td>
      <td class="tableCell"><span class="codeSnip">class="btn-close"</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/navigation/tabs-and-pills-js">← Back</a>
    <div class="xrefTitle">Section: Bootstrap → Navigation → Tabs & Pills JS</div>
  </div>
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/overlays/dropdowns">Next →</a>
    <div class="xrefTitle">Bootstrap → Overlays → Dropdowns</div>
  </div>
</div>