import { bench } from '@thi.ng/bench'
import { clsx } from 'clsx'
import { twJoin } from '../src'

bench(() => clsx(
  'mx-4 my-2 p-2',
  'bg-red-700 hover:bg-red-500',
), 1e6, 'clsx\t')

bench(() => twJoin(
  'mx-4 my-2 p-2',
  'bg-red-700 hover:bg-red-500',
), 1e6, 'twJoin\t')
