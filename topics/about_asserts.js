
const assert = require('assert')
const {__, test } = require('../support/koans')


test("ok", () => {
    assert.ok(true === true, 'what will satisfy the ok assertion?');
})

test("not ok", () => {
    assert.ok(false === false, 'what is a false value?');
})

test("ok", () => {
    assert.equal(2, 1 + 1, 'what will satisfy the equal assertion?');
})