"use strict";

const unemit = require(".");

test("only adds a handler once", () => {
  const emitter = unemit();
  const handler = jest.fn();
  emitter.on("evt", handler);
  emitter.on("evt", handler);
  emitter.emit("evt");
  expect(handler).toHaveBeenCalledTimes(1);
});

test("once works", () => {
  const emitter = unemit();
  const handler = jest.fn();
  emitter.once("evt", handler);
  emitter.emit("evt");
  emitter.emit("evt");
  emitter.emit("evt");
  expect(handler).toHaveBeenCalledTimes(1);
});

test("off works", () => {
  const emitter = unemit();
  const handler = jest.fn();
  emitter.on("evt", handler);
  emitter.emit("evt");
  emitter.off("evt", handler);
  emitter.emit("evt");
  expect(handler).toHaveBeenCalledTimes(1);
});

test("returned unscriber works", () => {
  const emitter = unemit();
  const handler = jest.fn();
  const off = emitter.on("evt", handler);
  emitter.emit("evt");
  off();
  emitter.emit("evt");
  expect(handler).toHaveBeenCalledTimes(1);
});
