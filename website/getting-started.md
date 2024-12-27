# Getting Started

## Installation

Use your favourite package manager to install the module
from `@abw/badger-codecs`.

::: code-group
```shell [npm]
npm add @abw/badger-codecs
```
```shell [pnpm]
pnpm add @abw/badger-codecs
```
```shell [yarn]
yarn add @abw/badger-codecs
```
:::

## Basic Use

Import the `codec()` function using ESM syntax.

```js
import { codec } from '@abw/badger-codecs'
```

Or via `require()` if you're still using Common JS format.

```js
const { codec } = require('@abw/badger-codecs')
```

Call the `codec` method to fetch a code for a particular format.

```js
const json = codec('json')
const yaml = codec('yaml')
```

You can then encode data using the `encode` function:

```js
const jsonText = json.encode({ message: 'Hello World!' })
const yamlText = yaml.encode({ message: 'Hello World!' })
```

And decode the serialised text using the `decode` function:

```js
const jsonData = json.decode(jsonText)
const yamlData = yaml.decode(yamlText)
```

## Do the Happy Badger Dance

Let the Happy Badger Dancing begin!

<img src="/images/happy_badger_dance.gif" width="100%"/>