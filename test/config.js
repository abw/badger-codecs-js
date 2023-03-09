import test from 'ava';
import { codec } from '../src/index.js';

const json = codec('json');
const yaml = codec('yaml');

yaml.config({ indent: 4 })
json.config({ space:  4 })

test(
  'yaml indent:4',
  t => t.is(
    yaml.encode({ numbers: [1, 2, 3] }),
    "numbers:\n    - 1\n    - 2\n    - 3\n"
  )
);
test(
  'json space:4',
  t => t.is(
    json.encode({ numbers: [1, 2, 3 ]} ),
    '{\n    "numbers": [\n        1,\n        2,\n        3\n    ]\n}')
);

