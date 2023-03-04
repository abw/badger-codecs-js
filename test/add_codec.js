import test from 'ava';
import { codec, addCodec } from '../src/index.js';

test.before(
  'addCodec()',
  t => {
    addCodec(
      'upper',
      lower => lower.toUpperCase(),
      upper => upper.toLowerCase(),
    )
    t.pass('added codec')
  }
);

let upper

test.serial(
  'upper codec function',
  t => {
    upper = codec('upper');
    t.truthy(upper)
  }
);

test.serial(
  'upper codec encode() function',
  t => t.is(upper.encode("badger"), "BADGER")
);
test.serial(
  'upper codec decode() function',
  t => t.is(upper.decode("BADGER"), "badger")
);
