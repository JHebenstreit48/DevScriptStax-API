# Angular Modules – Basics

An Angular module (NgModule) groups components, directives, pipes, and services into cohesive units.

---

## What Is an NgModule?

The <span class="codeSnip">@NgModule</span> decorator organizes application code:

```ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { SharedComponent } from './shared/shared.component'

@NgModule({
  declarations: [AppComponent, SharedComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- <span class="codeSnip">declarations</span>: declares components and pipes
- <span class="codeSnip">imports</span>: brings in dependencies
- <span class="codeSnip">providers</span>: available services
- <span class="codeSnip">bootstrap</span>: root component that launches the app

---

## Why Use Modules

- Improve **code organization** and separation
- Enable **lazy loading** of features
- Prepare Angular for optimized builds (AOT)

NgModules form the structural backbone of your application.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/angular/basics/core-concepts/components/inputs-outputs">← Back</a>
    <div class="xrefTitle">Section: Angular Components → Inputs/Outputs</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/angular/core-concepts/lazy-loading">Next →</a>
    <div class="xrefTitle">Modules → Lazy Loading</div>
  </div>
</div>