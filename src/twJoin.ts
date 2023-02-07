type InputToken = string | false | null | undefined

export const twJoin = (
  ...inputTokens: InputToken[]
): string => {
  return inputTokens
    .filter(Boolean)
    .join(' ')
    .replaceAll(/  +/g, ' ')
    .trim()
}
