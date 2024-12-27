import test from './library/ava-vitest'
import { codec, addCodec } from '../src/index'

test(
  'addCodec()',
  t => {
    addCodec(
      'upper',
      lower => (lower as string).toUpperCase(),
      upper => (upper as string).toLowerCase(),
    )
    t.true(true)
  }
)

let upper

test(
  'upper codec function',
  t => {
    upper = codec('upper')
    t.truthy(upper)
  }
)

test(
  'upper codec encode() function',
  t => t.is(upper.encode('badger'), 'BADGER')
)
test(
  'upper codec decode() function',
  t => t.is(upper.decode('BADGER'), 'badger')
)
