import json   from './Json.js'
import yaml   from './Yaml.js'
import base64 from './Base64.js'
import { fail } from '@abw/badger-utils';

export let codecs = {
  json, yaml, base64
};

export const addCodec = (name, encode, decode) =>
  codecs[name.toLowerCase()] = { encode, decode }

export const codec = name =>
  name.includes('+')
    ? codecChain(name)
    : (codecs[name.toLowerCase()] || fail(`Invalid codec: ${name}`))

export const codecChain = chain => {
  const names    = chain.split(/\s*\+\s*/);
  const encoders = names.map(codec);
  const decoders = [...encoders].reverse();
  return {
    encode: data => encoders.reduce(
      (result, codec) => codec.encode(result),
      data
    ),
    decode: data => decoders.reduce(
      (result, codec) => codec.decode(result),
      data
    ),
  }
}

export default codecs
