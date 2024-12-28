export type ConfigObject = {
  [key:string]: unknown
}
export type Config  = (config?: ConfigObject) => ConfigObject
export type Encoder = (data: unknown) => string
export type Decoder = (text: string) => unknown
export type CodecProvider = (options?: Config) => Codec
export type Codec = {
  encode: Encoder,
  decode: Decoder,
  config: Config
}
export type CodecFunction = (options?: Config) => Codec
export type CodecFinder = (name: string, options?: Config) => CodecFunction