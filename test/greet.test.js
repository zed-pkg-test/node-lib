"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { greet } = require("../src/index.js");

test("greet identifies the immutable Zed package namespace", () => {
  assert.equal(
    greet("consumer"),
    "hello consumer from @zed-pkg-test/node-lib"
  );
});
