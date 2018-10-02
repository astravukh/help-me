module.exports = function count(s, pairs) {
  var N = 1;
  for(var i = 0; i < pairs.length; i++){
    N *= pairs[i][0] ** pairs[i][1];
  }

  if(s.length == 1 && s[0] == 1){
    return eulersMulti(pairs);
  }

  if (N > 100000000) return false;

  let count = 0;

  for (let i = 0; i < N; i++){
    for (let j = 0; j < s.length; j++) {
      if (getOneOrZero(i + j, pairs) != s[j]){        
        break;
      }
      if(j == s.length - 1){
        count++;
      }
    } 
  }
  var result = count % 1000000007;
  return result;
}
function getOneOrZero(i, pairs) {
  for (let j = 0; j < pairs.length; j++) {
    if (i % pairs[j][0] == 0){
      return 0;
    }    
  }
  return 1;  
}
function eulersMulti(pairs) {
  let result = 1;
  for(let pair of pairs){
    result *= pair[0] - 1;
  }
  return result;
}
