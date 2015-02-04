var assert = require('assert');
var hasIdSelector = require('..');

var idSelectors = [
  '.foo #bar',
  '#bar.foo',
  '[input="text"] #foo',
  'ul > li + li #baz'
]

var otherSelectors = [
  '.foo',
  'a',
  '[input="text"]',
  'a:visisted',
  'li + li'
]

describe('has-id-selector', function() {

  it('should return true if there is an id selector', function() {
    idSelectors.forEach(function(idSelector) {
      assert.ok(hasIdSelector(idSelector))
    })
  })

  it('should return false if there is no id selector', function() {
    otherSelectors.forEach(function(otherSelector) {
      assert.ok(!hasIdSelector(otherSelector))
    })
  })
})
