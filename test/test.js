var assert = require('assert')

var problem1 = require('../js/problem001')
var problem2 = require('../js/problem002')

describe('Problem 001', function () {
  it('should return 233168 as the correct answer', function () {
    assert.equal(233168, problem1.run(1000))
  })
})

describe('Problem 002', function () {
  it('should return 4613732 as the correct answer', function () {
    assert.equal(4613733, problem2.run(4000000))
  })
})
