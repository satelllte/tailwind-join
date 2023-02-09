type InputToken = string | false | null | undefined

export const twJoin = (...args: InputToken[]) => {
  let tmp: InputToken
  let str: string = ''
  let x: string = ''
  let i = 0
  while (i < args.length) {
		if (tmp = args[i++]) {
			if (x = tmp || '') {
				str && (str += ' ')
				str += x
			}
		}
	}
	return str
}
