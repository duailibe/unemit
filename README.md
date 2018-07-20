# `unemit`

[![Travis](https://img.shields.io/travis/com/duailibe/unemit.svg?style=flat-square)](https://travis-ci.com/duailibe/unemit)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/unemit.svg?style=flat-square)](https://npmjs.org/unemit)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

Minimal event emitter

## Usage

```js
const unemit = require("unemit");

const emitter = unemit();

const unsubscribe = emitter.on("type", data => {
  console.log(data);
});

emitter.emit("type", { foo: "bar" });
```

### `unemit()`

Returns an Emitter object

### `Emitter.emit(type, event)`

Emits an event of type `type`. Will call the handlers with `handler(event)`.

### `Emitter.on(type, handler)`

Registers a handler for events of type `type`. Returns a function that removes the handler.

```js
const unsubscribe = emitter.on("type", handler);

unsubscribe();
```

### `Emitter.off(type, handler)`

Removes a handler from events of type `type`.

### `Emitter.once(type, handler)`

Registers a handler for only the first event of type `type`. It's equivalent to:

```js
function handler() {
  emitter.off("type", handler);
}
emitter.on("type", handler);
```

## Credits

This library was inspired by [mitt](https://github.com/developit/mitt).
