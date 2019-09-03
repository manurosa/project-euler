# Each new term in the Fibonacci sequence is generated
# by adding the previous two terms.
# By starting with 1 and 2, the first 10 terms will be:
#
# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
#
# By considering the terms in the Fibonacci sequence whose values
# do not exceed four million,
# find the sum of the even-valued terms.

class Problem002
  def self.run(limit)
    seq = [1, 2]
    begin
      last, prev = seq.last(2)
      next_number = last + prev
      seq.push(next_number)
    end while next_number < limit

    seq.reduce 0 do |acc, curr|
      curr.even? ? acc + curr : acc
    end
  end
end
