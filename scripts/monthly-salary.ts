export const BASE_SALARY = 1_000

/**
 * Calculates the monthly salary based on the number of sales.
 * 
 * @param sales - The number of sales made in a month.
 * @returns The calculated monthly salary based on the number of sales.
 *          If the number of sales is negative, returns undefined.
 *          If the number of sales is between 0 and 10 (inclusive), returns the base salary.
 *          If the number of sales is between 11 and 20 (inclusive), returns the base salary plus the sales multiplied by 50.
 *          If the number of sales is greater than 20, returns the base salary plus the sales multiplied by 100.
 */
export const monthlySalary = (sales: number): number | undefined => {
  if (sales < 0) return
  if (sales <= 10) return BASE_SALARY
  if (sales >= 11 && sales <= 20) return BASE_SALARY + sales * 50
  return BASE_SALARY + sales * 100
}
