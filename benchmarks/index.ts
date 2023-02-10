import { suite } from '@thi.ng/bench'
import { clsx } from 'clsx'
import { twJoin } from '../src'

const suiteOptions = {
  iter: 10,
  size: 1_000_000,
}

suite(
  [
    {
      title: 'clsx (one class)',
      fn: () => clsx('md-2')
    },
    {
      title: 'twJoin (one class)',
      fn: () => twJoin('md-2')
    },
  ],
  suiteOptions
)

suite(
  [
    {
      title: 'clsx (two classes)',
      fn: () => clsx(
        'md-2',
        'px-2',
      )
    },
    {
      title: 'twJoin (two classes)',
      fn: () => twJoin(
        'md-2',
        'px-2',
      )
    },
  ],
  suiteOptions
)

suite(
  [
    {
      title: 'clsx (many classes)',
      fn: () => clsx(
        'mx-4',
        'my-2 p-2',
        'bg-red-700 hover:bg-red-500',
        false && 'border-2 border-red-800',
        true && 'transition-all',
      )
    },
    {
      title: 'twJoin (many classes)',
      fn: () => twJoin(
        'mx-4',
        'my-2 p-2',
        'bg-red-700 hover:bg-red-500',
        false && 'border-2 border-red-800',
        true && 'transition-all',
      )
    },
  ],
  suiteOptions
)
