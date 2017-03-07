var assert = require('assert')

var problem1 = require('../problems/problem001')

describe('Problem 001', function () {
  it('should return 233168 as the correct answer', function () {
    assert.equal(233168, problem1.run(1000))
  })
})
