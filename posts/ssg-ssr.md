---
title: 'When to use Static Generation vs Server-side rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with or without data) whenever possible because your page can be built once and served by CDN, which makes it faster than having a server render on each page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows freauently updated data, and the page content changes on every request.

In that case, you can use **Server-side Rendering**. It will be slower, but the pre-rendered page will alsways be up-to-date. Or you can skip pre-rendering and use client-side Javascript to populate data.