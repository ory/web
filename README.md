# [www.ory.sh](https://www.ory.sh)

![CI](https://github.com/ory/web/workflows/CI/badge.svg?branch=master)

This is the [www.ory.sh](https://www.ory.sh) website!

## Contributing

### Writing Blog Articles

To be done.

## Writing Pages

Pages are kept in [src/pages](src/pages) and must be markdown files. Additionally, you need to add meta information at the top of the markdown file:

```md
---
path: '/the-path'
title: 'The Page Title'
metaTitle: 'The SEO Title'
metaDescription: 'The SEO Description.'
lastUpdatedAt: 'Aug 12th, 2019'
---

The text of your article...
```

* `path`: The page's URL (e.g. `/about-us`). **Start with leading slash!**
* `title`: Page title in the hero section.
* `metaTitle`: HTML head title tag: `<title></title>`
* `metaDescription`: HTML meta description tag: `<meta type="description">`
