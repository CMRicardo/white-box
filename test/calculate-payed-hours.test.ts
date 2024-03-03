import { expect, test } from 'vitest'

import { calculatePayedHours } from '../scripts/calculate-payed-hours'

test('should return undefined', () => {
  expect(calculatePayedHours(-10)).toBe(undefined)
})

test('should return 10 * 10', () => {
  expect(calculatePayedHours(10)).toBe(10 * 10)
})

test('should return 25 * 15', () => {
  expect(calculatePayedHours(25)).toBe(25 * 15)
})

test('should return 50 * 20', () => {
  expect(calculatePayedHours(50)).toBe(50 * 20)
})
