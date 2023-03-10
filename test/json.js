import test from 'ava';
import { codec } from '../src/index.js';

const json = codec('json');
json.config({ space: 0 });

test(
  'json codec encode() function',
  t => t.is(json.encode([1, 2, 3]), "[1,2,3]")
);
test(
  'json codec decode() function',
  t => t.is(json.decode("[99,100]")[0], 99)
);
