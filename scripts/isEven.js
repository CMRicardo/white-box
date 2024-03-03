export const isEven = (hours = 0) => {
  if (hours < 0) return 'invalid'
  if (hours % 2 === 0) return 'valid'
  return 'invalid'
}
