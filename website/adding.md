# Adding Codecs

The module exports an `addCodec()` function which can be used to register
a new codec.  It expects three or four arguments: the codec name, an
`encode()` function, a `decode()` function and an optional `config()`
function to set the configuration defaults.

This trivial example shows how a codec can be registered for "encoding" text
as upper case, and then "decoding" it back to lower case.

```js
import { addCodec, codec } from '@abw/badger-codecs'

addCodec(
  'upper',
  lower => lower.toUpperCase(),
  upper => upper.toLowerCase(),
)
```

You can now use the codec like any other.

```js
const myCodec = codec('upper');
const encoded = myCodec.encode("hello");    // => HELLO
const decoded = myCodec.decode("HELLO");    // => hello
```

**NOTE:** For consistency, all codecs are stored with lower case names.
That means that `codec("UPPER")` and `codec("upper")` both return the same
codec.  You can register your codec with an upper or mixed case name if you
really want to, but be warned that internally it is converted to lower case.
The outcome is that you can't register two different codecs with names that
only differ in case.
