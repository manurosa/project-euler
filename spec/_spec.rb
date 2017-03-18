require_relative '../rb/problem001'
require_relative '../rb/problem002'

describe Problem001 do
  context 'Given the limit 1000' do
    it 'returns 233168' do
      expect(Problem001.run(1000)).to eql(233_168)
    end
  end
end

describe Problem002 do
  context 'Given the limit 4000000' do
    it 'returns 4613733' do
      expect(Problem002.run(4_000_000)).to equal(4_613_733)
    end
  end
end
