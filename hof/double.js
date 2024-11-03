function double(x)
{
    return x*2
}
function Myfunction(number,transform)
{
    let output=[]
    for(let i=0;i<number.length;i++)
    {
        let result=transform(number[i])
        output.push(result)
    }
    return output
}
let arr=[1,2,3,4,5]
let doubleArr=Myfunction(arr,double)
console.log(doubleArr)

// using map function
let array=[1,2,3,4,5]
let ans=array.map(function(num)
{
    return num*2
})
console.log(ans)
