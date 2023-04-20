import test from 'ava';
import { codec } from '../src/index.js';

const yaml = codec('yaml');

test(
  'yaml codec loaded',
  t => t.is( typeof yaml.encode, 'function')
);
test(
  'yaml codec encode() function',
  t => t.is(yaml.encode([1, 2, 3]), "- 1\n- 2\n- 3\n")
);
test(
  'yaml codec decode() function',
  t => t.is(yaml.decode("msg: Hello World").msg, "Hello World")
);

const yml = codec('yml');

test(
  'yml codec loaded',
  t => t.is( typeof yml.encode, 'function')
);
test(
  'yml codec encode() function',
  t => t.is(yml.encode([1, 2, 3]), "- 1\n- 2\n- 3\n")
);
test(
  'yml codec decode() function',
  t => t.is(yml.decode("msg: Hello World").msg, "Hello World")
);

