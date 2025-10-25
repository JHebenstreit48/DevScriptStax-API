# Captions and Table Groups

Captions and grouping elements make tables more readable and accessible. They describe the purpose and structure of data.

---

## &lt;caption&gt;

The <span class="codeSnip">&lt;caption&gt;</span> tag provides a description for the table. It should be the first child inside a <span class="codeSnip">&lt;table&gt;</span>.

```html
&lt;table&gt;
  &lt;caption&gt;Top 5 Programming Languages&lt;/caption&gt;
  &lt;tr&gt;
    &lt;th&gt;Rank&lt;/th&gt;
    &lt;th&gt;Language&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;JavaScript&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
```

---

## Grouping Elements: &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;

Use these elements to logically separate table content:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Tag</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">&lt;thead&gt;</td>
      <td class="tableCell">Contains column headers</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&lt;tbody&gt;</td>
      <td class="tableCell">Main body of data rows</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&lt;tfoot&gt;</td>
      <td class="tableCell">Summary or totals row</td>
    </tr>
  </tbody>
</table>

---

## Example with All Table Parts

```html
&lt;table&gt;
  &lt;caption&gt;Monthly Sales Report&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Month&lt;/th&gt;&lt;th&gt;Revenue&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;January&lt;/td&gt;&lt;td&gt;$10,000&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;February&lt;/td&gt;&lt;td&gt;$12,500&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;&lt;td&gt;Total&lt;/td&gt;&lt;td&gt;$22,500&lt;/td&gt;&lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;
```

---

## Summary

- Use <span class="codeSnip">&lt;caption&gt;</span> to describe the table’s purpose  
- Organize large tables with <span class="codeSnip">&lt;thead&gt;</span>, <span class="codeSnip">&lt;tbody&gt;</span>, and <span class="codeSnip">&lt;tfoot&gt;</span>  
- Improves accessibility and readability
