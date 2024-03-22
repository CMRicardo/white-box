/**
 * Determines if a given number of hours is even or not.
 * 
 * @param hours - The number of hours to check.
 * @returns 'valid' if the number of hours is even, 'invalid' otherwise.
 */
export const isEven = (hours: number): 'valid' | 'invalid' => {
  if (hours < 0) return 'invalid'
  if (hours % 2 === 0) return 'valid'
  return 'invalid'
}
