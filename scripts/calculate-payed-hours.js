/**
 * The function calculates the total pay based on the number of hours worked, with different rates for
 * different ranges of hours.
 * @param [hours=0] - The function `calculatePayedHours` takes an optional parameter `hours` which
 * represents the number of hours worked. If no value is provided, it defaults to 0. The function
 * calculates the total pay based on the number of hours worked according to the following rules:
 * @returns The function `calculatePayedHours` returns the total amount of pay based on the number of
 * hours worked.
 */
export const calculatePayedHours = (hours = 0) => {
  if (hours < 0) return
  if (hours <= 20) return hours * 10
  if (hours >= 21 && hours <= 40) return hours * 15
  return hours * 20
}
