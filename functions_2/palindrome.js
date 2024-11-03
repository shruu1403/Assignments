// function isPalindrome(str) {
//     let rev = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }
//     if (rev == str) {
//         console.log("yes")
//     } else {
//         console.log("No")
//     }
// }
// let str2 = "madam";
// let str3 = "Rama";

// (isPalindrome(str2));
// (isPalindrome(str3));

function isPalindrome(num) {
    let originalNum = num;
    let revNum = 0;
    while (num > 0) 
    {
      let lastDigit = num % 10;
      revNum = revNum * 10 + lastDigit;
      num = Math.floor(num / 10)
    }
    if(originalNum === revNum)
    {
        console.log("yes")
    }
    else{
        console.log("no")
    }
  }
  let test = 121;
  isPalindrome(test)


