# Angular Routing – Basics

Routing lets you map URLs to components, enabling navigation without full-page reloads.

---

## 🔗 Basic Route Configuration

```ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'
import { AboutComponent } from './about.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

Use <span class="codeSnip">RouterModule.forRoot(routes)</span> to register routes at the app root.

---

## 🧭 Router Outlet & Links

Place <span class="codeSnip">&lt;router-outlet&gt;</span> in your AppComponent template:

```html
<nav>
  <a routerLink="/">Home</a> | <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>
```

<span class="codeSnip">routerLink</span> updates the URL and displays the associated component.

> Next: Learn about guards, resolvers, and protected routes.
