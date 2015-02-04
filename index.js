'use strict'

module.exports = function hasIdSelector(selector) {
  if (typeof selector != 'string') {
    throw new TypeError('has-id-selector expected a string')
  }

  return /#/.test(selector)
}
