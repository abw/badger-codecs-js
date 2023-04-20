import json   from './Json.js'
import yaml   from './Yaml.js'
import base64 from './Base64.js'
import { fail } from '@abw/badger-utils';

export let codecs = {
  json, yaml, base64,
  yml: yaml,
  jsn: json,
};

export const addCodec = (name, encode, decode, config) =>
  codecs[name.toLowerCase()] = () => ({ encode, decode, config })

export const codec = (name, options) =>
  name.includes('+')
    ? codecChain(name, options)
    : (codecs[name.toLowerCase()] || fail(`Invalid codec: ${name}`))(options)

export const codecConfig = (name, options) =>
  codec(name).config(options)

export const codecChain = (chain, options) => {
  const names    = chain.split(/\s*\+\s*/);
  const encoders = names.map( name => codec(name, options) );
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
