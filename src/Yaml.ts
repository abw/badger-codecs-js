import { parse, stringify } from 'yaml'
import { CodecFunction, Config, Decoder, Encoder } from './types'

const defaults = {
  indent: 2
}

const config: Config = opts => Object.assign(defaults, opts)
const decode: Decoder = text => parse(text)

export const yamlCodec: CodecFunction = (options={}) => {
  const merged = { ...defaults, ...options }
  const encode: Encoder = data => stringify(data, undefined, merged)
  return { encode, decode, config }
}

export default yamlCodec
