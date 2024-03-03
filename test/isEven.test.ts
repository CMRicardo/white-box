import { test, expect } from 'vitest'

import { isEven } from '../scripts/is-even'

test('should return invalid as number is negative', () => {
  expect(isEven(-2)).toBe('invalid')
})

test('should return valid as number is even', () => {
  expect(isEven(2)).toBe('valid')
})

test('should return invalid as number is not even', () => {
  expect(isEven(5)).toBe('invalid')
})
