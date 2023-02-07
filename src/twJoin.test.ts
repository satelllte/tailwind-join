import { describe, it, expect } from 'vitest'
import { twJoin } from './twJoin'

describe('twJoin', () => {

  it('works for the most accurate scenario', () => {
    expect(twJoin(
      'p-4',
      'w-full',
      'border-2',
      'border-white',
      'bg-black',
      'hover:bg-zinc-900/75',
      'focus:bg-zinc-900/90',
      'active:bg-zinc-900',
    )).toEqual(
      'p-4 w-full border-2 border-white bg-black hover:bg-zinc-900/75 focus:bg-zinc-900/90 active:bg-zinc-900'
    )
  })

  it('works for several classes per item', () => {
    expect(twJoin(
      'p-4 w-full',
      'border-2 border-white',
      'bg-black hover:bg-zinc-900/75 focus:bg-zinc-900/90 active:bg-zinc-900',
    )).toEqual(
      'p-4 w-full border-2 border-white bg-black hover:bg-zinc-900/75 focus:bg-zinc-900/90 active:bg-zinc-900'
    )
  })

  it('ignores redundant spaces', () => {
    expect(twJoin(
      ' p-4      w-full                                                       ',
      ' border-2 border-white                                                 ',
      ' bg-black hover:bg-zinc-900/75 focus:bg-zinc-900/90 active:bg-zinc-900 ',
    )).toEqual(
      'p-4 w-full border-2 border-white bg-black hover:bg-zinc-900/75 focus:bg-zinc-900/90 active:bg-zinc-900'
    )
  })

  it('ignores undefined and null inputs', () => {
    expect(twJoin(
      'p-4',
      null,
      'border-2',
      'border-white',
      undefined,
      'hover:bg-zinc-900/75',
      'focus:bg-zinc-900/90',
      'active:bg-zinc-900',
    )).toEqual(
      'p-4 border-2 border-white hover:bg-zinc-900/75 focus:bg-zinc-900/90 active:bg-zinc-900',
    )
  })

  it('resolves as empty string if no args, null or undefined', () => {
    expect(twJoin()).toEqual('')
    expect(twJoin(null)).toEqual('')
    expect(twJoin(undefined)).toEqual('')
  })

})
