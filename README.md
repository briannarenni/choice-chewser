# Choice Chewser Extension

A simple extension to flip a coin or pick a number 1-10 in a toolbar popup. Created as a way to explore Firefox extension development.

## Built With:

- Vite and SvelteJS
- [schadcn-svelte](https://www.shadcn-svelte.com/)
- Tabler Icons from [Iconify](https://iconify.design/) and svelte-radix

## Prerequisites

- Node.js (v20.9.0)
- npm (v10.8.1)
- Developed on MacOS Sonoma (14.5)

## Installation & Build

Once in the project directory, run `npm install` first.

Running `npm run build` will run two scripts synchronously:

```
vite build && node copyToDist.js
```

The `copyToDist.js` script ensures `manifest.json` is also copied over to the `dist/` folder in the build output.

## Packaging the Extension

Use the `web-ext` CLI tool to package the extension:

```
npx web-ext build --source-dir=dist --artifacts-dir=web-ext-artifacts
```

This will create a web-ext-artifacts folder with the packaged extension zip file inside.
