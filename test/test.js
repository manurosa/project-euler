var assert = require('assert')

var problem1 = require('../js/problem001')
var problem2 = require('../js/problem002')
var problem3 = require('../js/problem003')

describe('Problem 001', function () {
  it('should return 233168 as the correct answer', function () {
    assert.equal(problem1.run(1000), 233168)
  })
})

describe('Problem 002', function () {
  it('should return 4613732 as the correct answer', function () {
    assert.equal(problem2.run(4000000), 4613732)
  })
})

describe('Problem 003', function () {
  it('should return 6857 as the correct answer', function () {
    assert.equal(problem3.run(), 6857)
  })
})
