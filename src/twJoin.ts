type InputToken = string | null | undefined

export const twJoin = (
  ...inputTokens: InputToken[]
): string => {
  return inputTokens
    .join(' ')
    .replaceAll(/  +/g, ' ')
    .trim()
}
