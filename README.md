# ledger

Splitting and summing money in integer cents, so nothing is ever lost to
floating point.

```js
import { splitEvenly } from './src/index.js'
splitEvenly(1000, 3) // [334, 333, 333]
```

Run the suite with `npm test`. See `CONTRIBUTING.md` before sending a change.
