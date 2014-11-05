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
    strList.reduce(function(mommified, char){
      if(isVowel(char)){
        result += mommified ? '' : 'mommy';
        return true;
      }
      result += char;
      return false;
    }, false);
    return result;
  }
  return str;
}
