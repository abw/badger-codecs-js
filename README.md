# Badger Codecs

This implements a consistent interface for encoding and decoding data to and
from various different formats.

## Installation

Install `badger-codecs` using your favourite package manager.

### npm

npm add @abw/badger-codecs

### pnpm

pnpm add @abw/badger-codecs

### yarn

yarn add @abw/badger-codecs

# Why?

If you want to encode/decode some data as JSON, you can do this:

```js
const encoded = JSON.stringify(data);
const decoded = JSON.parse(encoded);
```

Or if you want to encode/decode some data as YAML, you can do this:

```js
import yaml from 'js-yaml';
const encoded = yaml.dump(data);
const decoded = yaml.load(encoded);
```

This module provides a `codec()` function for selecting a codec.  The codec
returned has `encode()` and `decode()` functions which are wrappers around
the appropriate code for the format.

For JSON:

```js
import { codec } from '@abw/badger-codecs'
const myCodec = codec('json');
const encoded = myCodec.encode(data);
const decoded = myCodec.decode(encoded);
```

Or for YAML:

```js
import { codec } from '@abw/badger-codecs'
const myCodec = codec('yaml');
const encoded = myCodec.encode(data);
const decoded = myCodec.decode(encoded);
```

The only thing that needs to change is the line that selects the codec.

A typical example of use is where you have a function that expects to be
passed a data file.  You can look at the file extension so see if it's
`.json` or `.yaml` and select the correct codec accordingly.  You don't need
an `if/else` statement to run the right piece of code.  You just select a
codec using the file extension and then call its `encode()` and `decode()`
functions.

## Codecs

The `json` codec is for encoding/decoding JSON.

The `yaml` codec is for encoding/decoding YAML.

The `base64` codec is for encoding/decoding UTF8 text to and from Base64.

The `yml` codec is provided as an alias for `yaml`, and `jsn` as an alias for
`json`.  It's quite common to see YAML files with a `.yml` extension so this
simplifies the process of selecting a codec using the file extension.  I've
never see a JSON file with a `.jsn` extension in the wild, but it's provided
for the sake of consistency.

## Chained Codecs

You can chain multiple codecs together with `+`.  For example, a codec to
JSON encode some data and then Base64 encode it would be `json+base64`.

```js
import { codec } from '@abw/badger-codecs'
const myCodec = codec('json+base64');
const encoded = myCodec.encode(data);
const decoded = myCodec.decode(encoded);
```

The `encode()` function will apply the `encode()` function for each of the
chained codecs in sequence.  The `decode()` function will apply the
`decode()` function for each of them, but in reverse order.

## Codec Configuration

The `codec()` function takes an optional second argument as an object of
configuration options.

For the `json` codec the only option is `space` to set the number of spaces
for the indent level.  The default is 2.

```js
import { codec } from '@abw/badger-codecs'

const json = codec('json', { space: 4 });   // set space to 4
```

For the `yaml` code the configuration options are used when encoding YAML.
These include `indent` for the indent level (default is 2) and any of the
other options supported by the `dump()` method of
[js-yaml](https://www.npmjs.com/package/js-yaml).

```js
import { codec } from '@abw/badger-codecs'

const yaml = codec('yaml', { indent: 4 });
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

## Adding Codecs

The module exports an `addCodec()` function which can be used to register
a new codec.  It expects three or four arguments: the codec name, an
`encode()` function, a `decode()` function and an optional `config()`
function to set the configuration defaults.

This trivial example shows how a codec can be registered for "encoding" text
as upper case, and then "decoding" it back to lower case.

```js
import { addCodec } from '@abw/badger-codecs'

addCodec(
  'upper',
  lower => lower.toUpperCase(),
  upper => upper.toLowerCase(),
)
```

You can now use the codec like any other.

```js
import { codec } from '@abw/badger-codecs'
const myCodec = codec('upper');
const encoded = myCodec.encode("hello");    // => HELLO
const decoded = myCodec.decode("HELLO");    // => hello
```

**NOTE:** For consistency, all codecs are stored with lower case names.
That means that `codec("JSON")` and `codec("json")` both return the same
codec.  You can register your codec with an upper or mixed case name if you
really want to, but be warned that internally it is converted to lower case.
The outcome is that you can't register two different codecs with names that
only differ in case.

## Author

Andy Wardley https://github.com/abw