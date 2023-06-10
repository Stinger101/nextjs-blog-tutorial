---
title: 'Two forms of Pre-rendering'
date: '2020-01-01'
---


Next.js has two forms of prerendering: **Static generation** and **Server-side rendering**. The difference is in **when** it generates HTML for the page.

- **Static generation** is the pre-rendering that generates HTML at **build time**. The pre-rendered HTML is then _reused_ at each request.
- **Server-side generation** is the pre-rendering method that generates HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendeing method you want to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.