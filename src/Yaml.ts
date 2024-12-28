import yaml from 'js-yaml'
import { CodecFunction, Config, Decoder, Encoder } from './types'

const defaults = {
  indent: 2
}

const config: Config = opts => Object.assign(defaults, opts)
const decode: Decoder = text => yaml.load(text)

export const yamlCodec: CodecFunction = (options={}) => {
  const merged = { ...defaults, ...options }
  const encode: Encoder = data => yaml.dump(data, merged)
  return { encode, decode, config }
}

export default yamlCodec
