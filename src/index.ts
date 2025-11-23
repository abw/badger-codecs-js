import json   from './Json'
import yaml   from './Yaml'
import base64 from './Base64'
import { fail } from '@abw/badger-utils'
import { Codec, Config, ConfigObject, Decoder, Encoder } from './types'

export const codecs = {
  json, yaml, base64,
  yml: yaml,
  jsn: json,
}

export const addCodec = (name: string, encode: Encoder, decode: Decoder, config?: Config) =>
  codecs[name.toLowerCase()] = () => ({ encode, decode, config })

export const codec = (name: string, options?: ConfigObject) : Codec =>
  name.includes('+')
    ? codecChain(name, options)
    : (codecs[name.toLowerCase()] || fail(`Invalid codec: ${name}`))(options)

export const codecConfig = (name: string, options: ConfigObject) =>
  codec(name).config(options)

export const codecChain = (chain: string, options: ConfigObject) => {
  const names    = chain.split(/\s*\+\s*/)
  const encoders: Codec[] = names.map( name => codec(name, options) )
  const decoders = [...encoders].reverse()
  const encode: Encoder = data => encoders
    .reduce(
      (result, codec) => codec.encode(result),
      data
    ) as string
  const decode: Decoder = data => decoders
    .reduce(
      (result, codec) => codec.decode(result),
      data
    )
  const config: Config = opts => Object.assign({ }, opts)
  return { encode, decode, config }
}

// export default codecs
