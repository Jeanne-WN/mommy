function mommify(str){
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return vowels.indexOf(str) >= 0 ? 'mommy' : str;
}
