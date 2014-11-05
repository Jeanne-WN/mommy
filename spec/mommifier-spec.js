describe('Mommifier',function(){
  it('should return h when given h', function(){
    var str = 'h';

    var result = mommify(str);

    expect(result).toBe(str);
  });

  it('should return m when given m', function(){
    var str = 'm';

    var result = mommify(str);

    expect(result).toBe(str);
  });

  it('should return vowel when given one vowel', function(){
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    var expectedResult = 'mommy';

    vowels.forEach(function(vowel){
      var result = mommify(vowel);
      expect(result).toBe(expectedResult);
    });
  });

  it('should return mmommy when given ma', function(){
    var str = 'ma',
        expectedResult = 'mmommy';

    var result = mommify(str);

    expect(result).toBe(expectedResult);
  });


  it('should return ship when given ship', function(){
    var str = 'ship',
        expectedResult = 'ship';

    var result = mommify(str);

    expect(result).toBe(expectedResult);
  });

  it('should return hmommy when given hear', function(){
    var str = 'hear',
        expectedResult = 'hmommyr';

    var result = mommify(str);

    expect(result).toBe(expectedResult);
  });
});
