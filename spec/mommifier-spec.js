describe('Mommifier',function(){
  it('should return h when given h', function(){
    var str = 'h';

    var result = mommify(str);

    expect(result).toBe(str);
  });
});
