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
});
