# Overview

It's easy to encode JSON data using `JSON.stringify()` and decode it again
using `JSON.parse()`.

```js
const encoded = JSON.stringify({ message: 'Hello World' })
const decoded = JSON.parse(encoded)
```

Or, if you're using YAML, then you can load the `js-yaml` module and use
`yaml.dump()` to encode it and `yaml.load()` to decode it again.

```js
import yaml from 'js-yaml'
const encoded = yaml.dump({ message: 'Hello World' })
const decoded = yaml.load(encoded)
```

A `codec` is a simple wrapper that provides a consistent interface to these
(and other) serialisation formats.  It's an object that has three properties:

* an `encode` function to turn data into serialised text
* a `decode` function to turn serialised text back into data
* a `config` function to set any configuration options

Consider this example:

```js
import { codec } from '@abw/badger-codecs'

const myCodec = codec('json')
const encoded = myCodec.encode({ message: 'Hello World' })
const decoded = myCodec.decode(encoded)
```

If you decide you want to use YAML instead then you just need to change the
line that loads the relevant codec object.

```js
const myCodec = codec('yaml')
```

After that, the process of using it is the same: you call `encode` or `decode`
and you don't need to remember which codec you're using and what the relevant
methods are that you're supposed to call.

It's as simple as that.  Nothing fancy, nothing clever, and nothing that you
couldn't do yourself in just as many lines of code.

The purpose is *only* to provide a consistent interface to similar functionality
provided by the built-in JSON functions, or those provided by `js-yaml`.

