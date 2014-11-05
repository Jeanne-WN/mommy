function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(char) >= 0;
}

function countVowel(str) {
  return str.split('').reduce(function(number, str) {
      return isVowel(str) ? number + 1 : number;
  }, 0);
}

function shouldMommify(str){
  var vowelPercentage = countVowel(str) / str.length || 0;
  return vowelPercentage == 0 || vowelPercentage >= 0.3
}

function mommify(str){
  var strList = str.split(''),
      result = "";

  if( shouldMommify(str) ){
    strList.forEach(function(char){
      result += isVowel(char) ? 'mommy' : char;
    })
    return result;
  }
  return str;
}
