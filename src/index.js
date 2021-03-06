module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let open = [];
  let close = [];
  for(let i = 0 ; i < bracketsConfig.length;i++){
    open.push(bracketsConfig[i][0])
    close.push(bracketsConfig[i][1])
  }
  for( let i =0 ; i < str.length; i++) {
    if(open.indexOf(str[i]) !== -1 ) stack.push(str[i]);
    else if(close.indexOf(str[i]) !== -1 ) stack.pop(str[i]);
  }
  return stack.length === 0 ? true : false;
}
