export type ConfigObject = {
  [key:string]: unknown
}
export type Config  = (config?: ConfigObject) => ConfigObject
export type Encoder = (data: unknown) => string
export type Decoder = (text: string) => unknown
export type CodecProvider = (options?: Config) => Codec
export type Codec = (options?: Config) => {
  encode: Encoder,
  decode: Decoder,
  config: Config
}
export type CodecFinder = (name: string, options?: Config) => Codec