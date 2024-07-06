# Choice Chewser Extension

A simple extension to flip a coin or pick a number 1-10 in a toolbar popup. Created as a way to explore Firefox extension development.

## Built With:

- Vite and SvelteJS
- [schadcn-svelte](https://www.shadcn-svelte.com/)
- Tabler Icons from [Iconify](https://iconify.design/) and svelte-radix

## Prerequisites

- Node.js (v20.9.0)
- npm (v10.8.1)

## Installation & Build

Run `npm install` first and build with `npm run build`, which will also run the **copyToDist.js** script at the same time. This ensures `manifest.json` is also copied over to the `dist/` folder during the build process.

## Packaging the Extension
The `web-ext` CLI tool was used for packaging by running `npx web-ext build --source-dir=dist --artifacts-dir=web-ext-artifacts`.
