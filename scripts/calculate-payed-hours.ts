/**
 * Calculates the amount of payed hours based on the given number of hours.
 * 
 * @param hours - The number of hours worked.
 * @returns The amount of payed hours.
 *          Returns undefined if the number of hours is negative.
 */
export const calculatePayedHours = (hours: number): number | undefined => {
  if (hours < 0) return
  if (hours <= 20) return hours * 10
  if (hours >= 21 && hours <= 40) return hours * 15
  return hours * 20
}
