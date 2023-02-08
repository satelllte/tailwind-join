# tailwind-join

A tiny utility to join [Tailwind](https://tailwindcss.com/) classes instead of placing them all into a single line.

```ts
import { twJoin } from 'tailwind-join'

twJoin(
  'm-4',
  'px-2 py-1',
  'bg-red-700 hover:bg-red-500',
) // -> 'm-4 px-2 py-1 bg-red-700 hover:bg-red-500'
```

## Install

```bash
npm i tailwind-join
```

## Features

### Split classes into multiple lines:

```ts
twJoin(
  'm-4',                          // spacing
  'border border-red-400',        // borders
  'bg-red-700 hover:bg-red-500',  // colors
) // -> 'm-4 border border-red-400 bg-red-700 hover:bg-red-500'
```

### Show & hide classes conditionally:

```ts
twJoin(
  isLarge ? 'm-4' : 'm-2',  // ternary
  isRed && 'bg-red',        // logical conjunction
)
```

### Also:

- Bundle size is very tiny (less than 300 bytes minified & gzipped). Check out ["tailwind-join" on Bundlephobia](https://bundlephobia.com/package/tailwind-join).
- TypeScript support.
- Works in all modern browsers and Node.js@16+.

## FAQ

### What is the difference between `tailwind-join` and other utilities like [classnames](https://www.npmjs.com/package/classnames), [clsx](https://www.npmjs.com/package/clsx)?

`tailwind-join` just focuses more on solving the Tailwind classes "hell" issue when tens of classes are placed into a single line. On the other hand, it has even smaller bundle size than `classnames` and `clsx` so it can be also intensively used for building classes conditionally using only "ternary" and "logical conjunction" operators approaches described above.

### Can `tailwind-join` be used for non-Tailwind classes?

Absolutely! `tailwind-join` doesn't know anything about Tailwind, it only solves the "single line classes" issue.

### Is there any plans to expand the API of `tailwind-join`?

No. The main focus is to solve the "single line classes" issue. Also, the two conditional approaches - "ternary" and "logical conjunction" are also enough. Actually, you can even consider using `tailwind-join` as the replacement for `clsx` and `classnames` with more strict approach for conditionals. In this case they all are going to be written in the same style, without messing around with objects, nested arrays, etc.

### Can [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) VSCode plugin be used with `tailwind-json`?

Yes! Just add this to `.vscode/settings.json`:

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["twJoin\\(([^)]*)\\)", "'([^']*)'"]
  ]
}
```
