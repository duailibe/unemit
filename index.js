/** @flow */

"use strict";

/*::
type Handler = (event?: any) => void;
type HandlerMap = { [name: string]: Set<Handler>, __proto__: null };
*/

module.exports = function() {
  const handlers /*: HandlerMap */ = Object.create(null);

  const emitter = {
    on(name /*: string */, handler /*: Handler */) {
      (handlers[name] || (handlers[name] = new Set())).add(handler);
      return () => emitter.off(name, handler);
    },

    once(name /*: string */, handler /*: Handler */) {
      const off = emitter.on(name, (event /*:: ?: any */) => {
        off();
        handler(event);
      });
      return off;
    },

    off(name /*: string */, handler /*: Handler */) {
      handlers[name] && handlers[name].delete(handler);
    },

    emit(name /*: string */, event /*::?: any */) {
      handlers[name] && handlers[name].forEach(handler => handler(event));
    }
  };

  return emitter;
};
