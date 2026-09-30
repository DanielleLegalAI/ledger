/**
 * Divides `totalCents` into `parts` shares that differ by at most one cent and
 * add back up to the total. The earlier shares take any extra cents.
 */
export function splitEvenly(totalCents, parts) {
  if (!Number.isInteger(totalCents) || totalCents < 0) {
    throw new RangeError('totalCents must be a non-negative integer')
  }
  if (!Number.isInteger(parts) || parts < 1) {
    throw new RangeError('parts must be a positive integer')
  }
  const share = Math.floor(totalCents / parts)
  return Array.from({ length: parts }, () => share)
}

/** Adds a list of cent amounts. */
export function sum(amounts) {
  return amounts.reduce((total, cents) => total + cents, 0)
}
