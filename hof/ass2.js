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
    for(let i=0;i<num.length;i++)
    {
        if(checkOdd(num[i])==true)
        {
            output.push(num[i])
        }
    }
    return output
}
let arr=[1,2,3,4,5,6,7]
let oddarray=Myfilter(arr,isOdd)
console.log(oddarray)

//using filter function
let array=[1,2,3,4,5,6,7]
let oddarr=array.filter(function(ele)
{
    return ele %2!=0
})
console.log(oddarr)

