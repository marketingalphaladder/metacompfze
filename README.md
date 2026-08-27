# MetaComp FZE — Website

Static site. No build step. Serve the folder over HTTP (`policies.json` is fetched at runtime, so `file://` will not work).

```
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

- `index.html` — the entire site (home, solutions, about, contact, and all Legal & Regulatory Hub policy pages, client-side routed)
- `policies.json` — content for the policy pages (Virtual Asset Risk Disclosure, Conflict of Interest, Best Execution Policy, Terms of Use)
- `support.js` — runtime
- `assets/` — logos, hero background, infographic
- `fonts/` — Poppins (Light/Regular/Medium/SemiBold/Bold)
- `_ds/` — MetaComp design system tokens + bundle

## Deploying

Works as-is on GitHub Pages, Netlify, Vercel, or Cloudflare Pages — point the root at this folder, no build command.

## Outstanding

The Terms of Use text is DRAFT v2 and contains unfilled placeholders (free zone name, commercial licence no., VARA licence no., last-updated date). Update them in `policies.json` before going live.
