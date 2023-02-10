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

### Why not just use multiple lines for classes?

You can, but the HTML output is going to have redundant spaces and line breaks, and `tailwind-join` takes care of it - so the final HTML output will be always solid:

```html
<div class="m-4 px-2 py-1 bg-black">
  ...
</div>
```

### Can `tailwind-join` be used for non-Tailwind classes?

Absolutely! `tailwind-join` doesn't know anything about Tailwind, it only solves the "single line classes" issue.

### Is there any plans to expand the API of `tailwind-join`?

No. The main focus is to solve the "single line classes" issue. Also, the two conditional approaches - "ternary" and "logical conjunction" are also enough. Actually, you can even consider using `tailwind-join` as the replacement for `clsx` and `classnames` with more strict approach for conditionals. In this case they all are going to be written in the same style, without messing around with objects, nested arrays, etc.

### Can [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) VSCode plugin be used with `tailwind-join`?

Yes! Just add this to `.vscode/settings.json`:

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["twJoin\\(([^)]*)\\)", "'([^']*)'"]
  ]
}
```

## Benchmarks

### TL;DR

Faster than `clsx` for the most of practical scenarios.

### Details

Since this utility does less job than `clsx` (no mess around with array & object arguments), it makes sense that `twJoin` is faster in practice. Though it does worse with a single class argument (most probably because it just uses ES6 `(...args)` [destruction assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) operator to accept arguments instead of using ES5 function's `arguments` object), it does better on 2 or more arguments.

Here's the benchmark example taken on Linux machine with Node.js v18:

```bash
benchmarking: clsx (one class)
	warmup... 82.65ms (10 runs)
	total: 79.17ms, runs: 10 (@ 1000000 calls/iter)
	mean: 7.92ms, median: 7.70ms, range: [7.70..9.64]
	q1: 7.70ms, q3: 7.81ms
	sd: 7.27%
benchmarking: twJoin (one class)
	warmup... 144.26ms (10 runs)
	total: 142.09ms, runs: 10 (@ 1000000 calls/iter)
	mean: 14.21ms, median: 14.09ms, range: [14.07..15.30]
	q1: 14.09ms, q3: 14.10ms
	sd: 2.56%
Fastest: "clsx (one class)"
---
benchmarking: clsx (two classes)
	warmup... 507.90ms (10 runs)
	total: 502.84ms, runs: 10 (@ 1000000 calls/iter)
	mean: 50.28ms, median: 50.26ms, range: [50.15..50.55]
	q1: 50.20ms, q3: 50.40ms
	sd: 0.24%
benchmarking: twJoin (two classes)
	warmup... 461.69ms (10 runs)
	total: 456.70ms, runs: 10 (@ 1000000 calls/iter)
	mean: 45.67ms, median: 45.67ms, range: [45.52..45.86]
	q1: 45.61ms, q3: 45.78ms
	sd: 0.22%
Fastest: "twJoin (two classes)"
---
benchmarking: clsx (many classes)
	warmup... 968.78ms (10 runs)
	total: 915.21ms, runs: 10 (@ 1000000 calls/iter)
	mean: 91.52ms, median: 91.46ms, range: [91.34..91.89]
	q1: 91.43ms, q3: 91.67ms
	sd: 0.18%
benchmarking: twJoin (many classes)
	warmup... 784.45ms (10 runs)
	total: 783.18ms, runs: 10 (@ 1000000 calls/iter)
	mean: 78.32ms, median: 78.32ms, range: [78.20..78.53]
	q1: 78.25ms, q3: 78.46ms
	sd: 0.14%
Fastest: "twJoin (many classes)"
```

For more benchmark runs see: https://github.com/satelllte/tailwind-join/actions/workflows/benchmark.yml
