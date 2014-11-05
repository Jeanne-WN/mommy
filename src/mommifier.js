function mommify(str){
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
      strList = str.split(''),
      result = "";
      strList.forEach(function(str){
        result += vowels.indexOf(str) >= 0 ? 'mommy' : str;
      })
  return result;
}
