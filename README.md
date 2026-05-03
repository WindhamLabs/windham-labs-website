# Windham Labs - Asset Allocation and Risk Management Software Solutions

The public site for **Windham Labs**: asset allocation and risk management specialists. This repository holds a static build of the experience visitors see online—fast, accessible pages with no server-side runtime.

## Stack

- **[Eleventy](https://www.11ty.dev/)** (v3) — static site generation  
- **Nunjucks** — layout and includes  
- **npm** — dependency and script runner  

Source lives under `src/`; production HTML and assets are emitted to `_site/`.

## Local development

**Requirements:** Node.js 20 LTS (aligned with CI).

```bash
npm ci
npm start
```

`npm start` runs Eleventy with `--serve` so you can edit templates and static assets with live reload.

**Production build:**

```bash
npm run build
```

Output is written to `_site/`. Use `npm run clean` to remove that directory before a fresh build.

## Configuration

For local checks that mirror GitHub Pages (project sites under `/<repository-name>/`), set:

| Variable     | Purpose |
|--------------|---------|
| `BASE_PATH`  | Leading path segment for the deployed site (e.g. `/windham-labs-website`). Omit or leave empty for a root-hosted site. |
| `SITE_URL`   | Canonical origin used in the sitemap (defaults to `https://www.windhamlabs.com` when unset). |

These values are applied automatically in CI so assets resolve correctly whether the site is served from the repository root or a project path.

## Deployment

Pushes to `main` trigger **GitHub Actions**, which builds the site and publishes it to **GitHub Pages**. No manual deploy step is required for that pipeline.

## Scope

This repository is limited to the **public Windham Labs marketing website**: templated HTML, styles, scripts, images, and the static-site toolchain that compiles them. It exists to version and publish that surface—not to host application logic, authentication, or back-office systems.

**Intended contents:** content and assets meant to be visible on the public site; build and deploy configuration for that same property.

**Not intended for this repository:** credentials, API keys, signing material, private endpoints, customer or employee personal data, or any other information that is not appropriate for a public repository under applicable policy. Those belong in governed systems outside this repo.

If you believe you have found a security issue affecting this website, report it through the **contact options published on [windhamlabs.com](https://www.windhamlabs.com)** (or the channel your agreement with Windham specifies) so it can be routed to the right team.

## Repository layout

```
src/
  _includes/     # Shared layout and partials
  _data/         # Global data (site URL, base href)
  css/, js/, fonts/, images/
  *.njk          # Pages and templates
.eleventy.js     # Eleventy configuration
```

---

*Windham Labs — sophisticated portfolio construction and risk management tools for institutional practice.*
