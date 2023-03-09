import test from 'ava';
import { codec } from '../src/index.js';

const json = codec('json');
const jb64 = codec('json+base64');
json.config({ space: 0 });

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
