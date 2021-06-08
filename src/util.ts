export const ParseCase = (s: string) => {
  const ss = s.split('-')
  let final = ''
  if (ss.length > 0) {
    for (const word of ss) {
      final += (word.charAt(0).toUpperCase() + word.slice(1)).replace('-', '')
    }
  } else {
    final += s.charAt(0).toUpperCase() + s.slice(1)
  }
  return final
}

export const PascalToSnake = (s: string) => {
  return s
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}

export const Chunks = (arrObj: Array<unknown>, size: number) => {
  return Array.from(new Array(Math.ceil(arrObj.length / size)), (_, i) =>
    arrObj.slice(i * size, i * size + size)
  )
}
