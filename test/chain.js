import test from 'ava';
import { codec } from '../src/index.js';

const jb64 = codec('json+base64');

test(
  'json + base64 codec encode() function',
  t => t.is(
    jb64.encode({ message: "Hello World!" }),
    "eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQhIn0="
  )
);

test(
  'json + base64 codec decode() function',
  t => t.is(
    jb64.decode("eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQhIn0=").message,
    "Hello World!"
  )
);
