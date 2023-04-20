import test from 'ava';
import { codec } from '../src/index.js';

const json = codec('json', { space: 0 });

test(
  'json codec encode() function',
  t => t.is(json.encode([1, 2, 3]), "[1,2,3]")
);
test(
  'json codec decode() function',
  t => t.is(json.decode("[99,100]")[0], 99)
);

test(
  'json codec encode() function with complex data',
  t => t.is(json.encode([1, 2, { item: 3 }]), '[1,2,{"item":3}]')
);

const jsn = codec('jsn', { space: 0 });

test(
  'jsn codec encode() function',
  t => t.is(jsn.encode([1, 2, 3]), "[1,2,3]")
);
test(
  'jsn codec decode() function',
  t => t.is(jsn.decode("[99,100]")[0], 99)
);
