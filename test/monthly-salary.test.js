import { expect, test } from 'vitest'

import { BASE_SALARY, monthlySalary } from '../scripts/monthly-salary'

test('should return undefined', () => {
  expect(monthlySalary(-2)).toBe(undefined)
})

test('should return 1_000', () => {
  expect(monthlySalary(10)).toBe(BASE_SALARY)
})

test('should return 1_550', () => {
  expect(monthlySalary(11)).toBe(BASE_SALARY + 11 * 50)
})

test('should return 3_100', () => {
  expect(monthlySalary(21)).toBe(BASE_SALARY + 21 * 100)
})
