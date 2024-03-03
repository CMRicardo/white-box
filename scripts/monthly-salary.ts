export const BASE_SALARY = 1_000

export const monthlySalary = (sales: number): number | undefined => {
  if (sales < 0) return
  if (sales <= 10) return BASE_SALARY
  if (sales >= 11 && sales <= 20) return BASE_SALARY + sales * 50
  return BASE_SALARY + sales * 100
}
