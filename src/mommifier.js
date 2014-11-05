function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(char) >= 0;
}

function mommify(str){
  var strList = str.split(''),
      result = "";
      strList.forEach(function(str){
        result += isVowel(str) ? 'mommy' : str;
      })
  return result;
}
