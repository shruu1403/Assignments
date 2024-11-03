function isOdd(x)
{
    if(x%2!=0)
    {
        return true
    }
    return false
}
function Myfilter(num,checkOdd)
{
    let output=[]
    let sum=0
    let count=0
    let avg=0
    for(let i=0;i<num.length;i++)
    {
        if(checkOdd(i)==true)
        {
            output.push(num[i])
            sum=sum+num[i]
            count++
            avg=sum/count
        }
    }
    return avg
}
let arr=[10, 24, 56, 72, 10, 88, 100, 564]
let oddarray=Myfilter(arr,isOdd)
console.log(oddarray)



