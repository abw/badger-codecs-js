import test from './library/ava-vitest.js'
import { codec } from '../src/index'

const base64 = codec('base64')

test(
  'base64 codec encode() function',
  t => t.is(base64.encode('Hello World!'), 'SGVsbG8gV29ybGQh')
)
test(
  'base64 codec decode() function',
  t => t.is(base64.decode('SGVsbG8gV29ybGQh'), 'Hello World!')
)
