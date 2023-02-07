# Tailwind Join

A tiny utility to join Tailwind classes.

## Install

```bash
npm i tailwind-join
```

## Usage

```tsx
import { twJoin } from 'tailwind-join';

interface BlockProps {
  text: string
  isRed: boolean
}

export const Block = ({
  text,
  isRed,
}: BlockProps) => {

  const className = twJoin(
    'm-4',
    'transition-colors',
    'bg-black hover:bg-zinc-900', // group classes
    isRed ? 'text-red-500' : null, // pick classes conditionally
  );

  return (
    <div className={className}>
      {text}
    </div>
  );
};
```
