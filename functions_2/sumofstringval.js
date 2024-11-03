
function getCharValue(char) 
{
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}
  function getTotalValue(str) 
{
    let totalSum = 0;
    for (let i = 0; i < str.length; i++) 
    {
      const char = str[i];
      totalSum += getCharValue(char);
    }
    return totalSum;
}
 
const testString = 'abc';
console.log(getTotalValue(testString))
  
 