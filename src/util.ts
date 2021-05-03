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
