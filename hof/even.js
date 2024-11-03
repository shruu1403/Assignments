function iseven(x)
{
    if(x%2==0)
    {
        return true
    }
    return false
}
function myfilter(number,checkeven)
{
    let output=[]
    for(let i=0;i<number.length;i++)
    {
        if(checkeven(number[i])==true)
        {
            output.push(number[i])
        }
    }
    return output 
}
let arr=[1,2,3,4,5,6]
let evenarray=myfilter(arr,iseven)
console.log(evenarray)

//using filter function
let array=[1,2,3,4,5,6]
let evenarr=array.filter(function(ele)
{
    return ele % 2==0
})
console.log(evenarr)