import { Codec, Config, Decoder, Encoder } from './types'

const defaults = {
  space: 2
}

const config: Config = opts => Object.assign(defaults, opts)
const decode: Decoder = text => JSON.parse(text)

export const jsonCodec: Codec = (options={}) => {
  const merged = { ...defaults, ...options }

  const encode: Encoder = data =>
    JSON.stringify(data, null, merged.space)

  return { encode, decode, config }
}

export default jsonCodec
