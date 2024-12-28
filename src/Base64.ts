import { Buffer } from 'node:buffer'
import { CodecFunction, Config, ConfigObject, Decoder, Encoder } from './types'

const config: Config  = (config?: ConfigObject) => config
const encode: Encoder = data => Buffer.from(data as string).toString('base64')
const decode: Decoder = text => Buffer.from(text, 'base64').toString('utf8')

export const base64Codec: CodecFunction = () => ({ encode, decode, config })

export default base64Codec

