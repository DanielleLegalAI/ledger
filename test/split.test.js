import { test } from 'node:test'
import assert from 'node:assert/strict'
import { splitEvenly, sum } from '../src/index.js'

test('splits an even amount into equal shares', () => {
  assert.deepEqual(splitEvenly(900, 3), [300, 300, 300])
})

test('never loses a cent when the amount does not divide evenly', () => {
  const shares = splitEvenly(1000, 3)
  assert.equal(sum(shares), 1000)
  assert.deepEqual(shares, [334, 333, 333])
})

test('refuses a negative total', () => {
  assert.throws(() => splitEvenly(-1, 2), RangeError)
})

test('refuses zero parts', () => {
  assert.throws(() => splitEvenly(100, 0), RangeError)
})
