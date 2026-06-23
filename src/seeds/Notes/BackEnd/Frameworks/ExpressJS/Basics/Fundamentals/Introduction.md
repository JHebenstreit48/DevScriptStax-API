# Introduction to Express.js

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Express is a minimal web framework for Node.js that makes it easier to create servers and handle HTTP requests.

It provides a simple way to:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Respond to browser requests</li>
    <li>Define routes</li>
    <li>Handle user input</li>
    <li>Control how the server responds</li>
  </ul>
</div>

Express does not replace Node.js.

Instead, it runs on top of Node.js and simplifies common server tasks.

<hr class="dividerSection" />

## What Express Means

<hr class="dividerSection" />

Express is often described as a <span class="emphasis">fast, unopinionated, minimalist</span> web framework.

This means:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Express is a collection of prewritten JavaScript code designed specifically for building web servers.</li>
    <li>It does not force rigid rules on developers.</li>
    <li>You decide how your server is structured instead of being locked into a strict framework pattern.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Frameworks vs Libraries

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Frameworks</span> — Follow a strict set of rules for implementation.</li>
    <li><span class="emphasis">Libraries</span> — Offer more flexibility and do not enforce strict rules.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Helpful Analogy

<hr class="dividerSection" />

Node without Express is like using Lego blocks where you choose everything manually.

Using Express with Node gives you specialized Lego blocks designed specifically for building web servers more efficiently.

You still have full control — Express just removes a lot of repetitive setup work.

<hr class="dividerSection" />

## What Is an Express App?

<hr class="dividerSection" />

An Express app is an object created by calling the Express function.

The app represents your server and is responsible for:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Listening for requests</li>
    <li>Deciding which code runs for each request</li>
    <li>Sending responses back to the browser</li>
  </ul>
</div>

You use the app object to define routes and middleware.

<hr class="dividerSection" />

## HTTP Requests (High-Level)

<hr class="dividerSection" />

When a browser communicates with a server, it sends an HTTP request.

Examples:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Typing a URL into the browser</li>
    <li>Clicking a navigation link</li>
    <li>Submitting a form</li>
  </ul>
</div>

Express allows you to decide how your server responds to each request by creating routes.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/django/advanced/deployment/scaling">← Back</a>
    <div class="xrefTitle">Topic: Django → Deployment → Scaling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/install-setup">Next →</a>
    <div class="xrefTitle">ExpressJS → Fundamentals → Install & Setup</div>
  </div>
</div>