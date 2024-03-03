export const isEven = (hours: number): 'valid' | 'invalid' => {
  if (hours < 0) return 'invalid'
  if (hours % 2 === 0) return 'valid'
  return 'invalid'
}
