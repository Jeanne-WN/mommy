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
});
