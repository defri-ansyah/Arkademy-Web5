function checkPalindrome(str) {
    if  (typeof str != 'string')
      return 'Data harus string';
    
    let len = (str.length / 2);
    for (let i = 0; i < len; i++){
      if (str[i] !== str[str.length - i - 1])
        return ("Bukan Palindrom");
      }  return ("Palindrom");
  }
console.log(checkPalindrome ('malim'));