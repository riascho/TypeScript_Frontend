# TypeScript FrontEnd Application

This is a very basic guide on how to use `TypeScript` in frontend rendering.

## [Basic Setup](./plain/)

This works if no imports are being made.

1. create `package.json`

```bash
npm init -y
```

2. install dependencies

```bash
npm install --save-dev typescript
```

3. create `tsconfig` file

```bash
tsc --init
```

4. create folder structure

- `src` folder for typescript files
- `dist` folder for javascript files

5. modify `tsconfig` to determine the root and compilation folders

```json
"rootDir": "./src",
"outDir": "./dist"
```

6. modify `package.json` to add a `"start"` script for compilation step before launching

```json
  "scripts": {
    "start": "tsc --watch"
```

7. make sure our html refers to compiled output javascript file

```html
<script src="./dist/script.js" defer></script>
```

## [Advanced Setup](./with_Snowpack/)

If any imports (3rd party libraries or modularization) have to be made, we need to use a bundler for several reasons:

**Module Resolution:** TypeScript supports ES6 modules, which need to be bundled into a single file or a few files that browsers can understand. Browsers do not natively support module imports in the same way as Node.js.

**Dependency Management:** Bundlers handle the inclusion of third-party libraries and dependencies, ensuring that all required modules are included in the final output.

**Code Splitting:** Bundlers can split code into smaller chunks, which can be loaded on demand, improving the performance of the application.

**Transpilation:** Bundlers can integrate with tools like Babel to transpile TypeScript and modern JavaScript into a version that is compatible with older browsers.

**Optimization:** Bundlers can minify and optimize the code, reducing the size of the final output and improving load times.

**Asset Management:** Bundlers can handle other assets like CSS, images, and fonts, ensuring they are included in the final build and referenced correctly in the HTML.

For this example we'll be using `snowpack` as our bundler.

1. install snowpack and template setup

```bash
npx create-snowpack-app [DIRECTORY or use "." for current] --template @snowpack/app-template-blank-typescript
```

2. modifying files as needed

- e.g. replace our own `index.html` content
- write out our typescript code in as many `.ts` files as needed in `src/` folder

3. imports should be handled correctly by `snowpack`.
   Install needed type declarations, e.g.

```bash
npm i --save-dev @types/uuid
```

```typescript
import { Task } from "./task";
```
