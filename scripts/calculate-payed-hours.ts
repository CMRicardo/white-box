export const calculatePayedHours = (hours: number): number | undefined => {
  if (hours < 0) return
  if (hours <= 20) return hours * 10
  if (hours >= 21 && hours <= 40) return hours * 15
  return hours * 20
}
