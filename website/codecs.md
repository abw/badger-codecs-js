# Codecs

## JSON

The `json` codec encodes and decodes data to and from JSON.

The `encode` function is a wrapper around `JSON.stringify()`

The `decode` function is a wrapper around `JSON.parse()`.

The `config` options allow you to set any of the options that can be
passed to `JSON.serialise()`.  For example, the `space` option can be
used to set the string or the number of spaces you want to use for
indentation.

```js
const myCodec = codec('json', { space: 2 })
const encoded = myCodec.encode({ message: 'Hello World' })
const decoded = myCodec.decode(encoded)
```

## YAML

The `yaml` codec encodes and decodes data to and from YAML using the
[js-yaml](https://www.npmjs.com/package/js-yaml) module.

The `encode` function is a wrapper around `JSON.dump()`

The `decode` function is a wrapper around `JSON.load()`.

The `config` options allow you to set any of the
[options](https://www.npmjs.com/package/js-yaml#dump-object---options-)
that can be passed to the `dump()` method.  For example, the `indent` option can be
used to set the number of spaces you want to use for indentation.

```js
const myCodec = codec('yaml', { indent: 2 })
const encoded = myCodec.encode({ message: 'Hello World' })
const decoded = myCodec.decode(encoded)
```

## Base64

The `base64`codec can be used for encoding and decoding text as Base 64.

This uses the built-in [Buffer.toString()](https://nodejs.org/api/buffer.html#buftostringencoding-start-end)
method from the Node Buffer module.

There aren't any configuration options for this codec.

```js
const myCodec = codec('base64')
const encoded = myCodec.encode('Hello World')
const decoded = myCodec.decode(encoded)
```
