import test from 'ava';
import { codec, codecConfig } from '../src/index.js';

codecConfig('yaml', { indent: 4 })
codecConfig('json', { space:  4 })

const json = codec('json');
const yaml = codec('yaml');

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

const yaml2 = codec('yaml', { indent: 2 });
const json2 = codec('json', { space: 2 });

test(
  'yaml indent:2',
  t => t.is(
    yaml2.encode({ numbers: [1, 2, 3] }),
    "numbers:\n  - 1\n  - 2\n  - 3\n"
  )
);
test(
  'json space:2',
  t => t.is(
    json2.encode({ numbers: [1, 2, 3 ]} ),
    '{\n  "numbers": [\n    1,\n    2,\n    3\n  ]\n}')
);

