# Codec Names

Codec names are case insensitive.

For example, you can specify the JSON codec as `json`, `JSON`, or `Json`.
Similarly, `yaml`, `YAML` and `Yaml` all do the same thing.

```js
// either
const myCodec = codec('json')
// or
const myCodec = codec('JSON')
// or
const myCodec = codec('Json')
// or any other case combination...
```

There are also the three letter versions: `yml` and `jsn` for the YAML and
JSON codecs respectively.

This is useful if you want to automatically determine the encoding of a file
from the file extension and you've got a `data.yml` file, for example.