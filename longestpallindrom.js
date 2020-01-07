var longestPalindrome = function(s) {
    var max="";
    for(i=0; i<s.length; i++){
    for(j=0; j<2; j++){
    var  left=i;
    var right=i+j;
    while(left >= 0 && s[left] === s[right]){
          left--;
          right++;
          }
    if((right-left - 1) > max.length ){
    max = s.substring(left+1, right);
                }
        }
    }
    return max;
   
};