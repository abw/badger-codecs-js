# Codec Options

You can pass a configuration object as the second argument to the `codec`
function.

For example, if you want your JSON to be encoded as tightly as possible
without any additional whitespace then you can set the `space` option to `0`.
The default value here is `2`.

```js
const myCodec = codec('json', { space: 0 })
```

Or if you want your YAML indented with 4 spaces instead of the default value of
2:

```js
const myCodec = codec('yaml', { indent: 4 })
```

## Global Configuration

The `codecConfig()` function can be used to set the global configuration
defaults for a codec.  Note that any changes made will only affect codecs
created after that point.  You can still override the defaults by providing
a configuration when you create the codec.

```js
import { codec, codecConfig } from '@abw/badger-codecs'

const json2 = codec('json')                 // has default space of 2

codecConfig('json', { space: 4 })           // set default space to 4

const json4 = codec('json')                 // has default space of 4
const json3 = codec('json', { space: 3 })   // explicit space of 3
```
