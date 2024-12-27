# Chaining Codecs

The `json` and `yaml` codecs serialise data into text.

There's also the `base64`codec for encoding and decoding text as Base 64.

```js
const myCodec = codec('base64')
const encoded = myCodec.encode('Hello World')
const decoded = myCodec.decode(encoded)
```

One nifty feature is that you can chain codecs together.  If you want to
encode some data as JSON and then as Base 64, you can define the codec as
`json+base64`.

```js
const myCodec = codec('json+base64')
const encoded = myCodec.encode({ message: 'Hello World' })
const decoded = myCodec.decode(encoded)
```

The `encode` function will encode the data using the `json` codec, then
feeding the output of that into the `base64` codec.  The `decode` function
works in the opposite direction, first decoding using `base64` and then `json`.
