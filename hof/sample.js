function masaiSentenceReverse(s) {
    let wordsArray = [];
    let currentWord = '';

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            // Push the current word to the array when a space is found
            if (currentWord) {
                wordsArray.push(currentWord);
                currentWord = ''; // Reset for the next word
            }
        } else {
            currentWord += s[i]; // Build the current word
        }
    }

    // Add the last word if there is one
    if (currentWord) {
        wordsArray.push(currentWord);
    }

    // Construct the reversed sentence
    let reversedSentence = '';
    for (let i = wordsArray.length - 1; i >= 0; i--) {
        reversedSentence += wordsArray[i];
        if (i > 0) {
            reversedSentence += ' '; // Add space between words
        }
    }

    return reversedSentence;
}

// Example Usage
const sentence = "Hello world this is JavaScript";
const reversed = masaiSentenceReverse(sentence);
console.log(reversed); // Outputs: "JavaScript is this world Hello"


function masaiSentenceReverse(s) {
    //write code here
    let arr=[]
    let currword=''
    for(let i=0;i<s.length;i++)
    {
        if(s[i]===' ')
        {
            if(currword)
            {
                arr.push(currword)
                currword=''
            }
            else
            {
                currword +=s[i]
            }
        }
          if (currword) {
          arr.push(currword);
      }
    }
let revsent=''
for(let i=arr.length-1;i>=0;i--)
{
    revsent +=arr[i]
    if (i > 0) 
    {
      revsent += ' '
    }
}
return revsent
}
