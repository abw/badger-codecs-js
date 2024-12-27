import test from './library/ava-vitest.js'
import { codec } from '../src/index'

const jb64 = codec('json+base64', { space: 0 })

test(
  'json + base64 codec encode() function',
  t => t.is(
    jb64.encode({ message: 'Hello World!' }),
    'eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQhIn0='
  )
)

test(
  'json + base64 codec decode() function',
  t => t.is(
    jb64.decode('eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQhIn0=').message,
    'Hello World!'
  )
)
