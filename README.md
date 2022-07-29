# line-remoteinterview-vue

## Requirements

- ✅ Implement UI component for uploading a CSV file
- Implement uploading file functionality
- Render the response resulting from API
- ✅ Can use any frontend frameworks and any CSS frameworks
- Can find the design in detail on Figma here
- Bonus if you validate the input
- Bonus if your progress bar shows a calculation between uploading time and processing time
- Bonus if you can make drag and drop work properly
- Bonus if you come up with some frontend tests

This template should help get you started developing with Vue 3 in Vite.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project Setup

```sh
npm install
npm run lint
prettier --write .
npm run dev
npm run build
npm run test:unit
```
