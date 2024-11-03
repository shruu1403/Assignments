function expo(x)
{
    return x**5
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
let arr=[2,3,4,6,7]
let expoArr=Myfunction(arr,expo)
console.log(expoArr)

// using map function
let array=[2,3,4,6,7]
let ans=array.map(function(num)
{
    return num**5
})
console.log(ans)
