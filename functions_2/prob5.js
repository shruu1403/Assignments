function MyCustomIncludes(arr,value)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==value)
        {
            return true
        }
    }
    return false
}
// let arr=[1,2,3]
// console.log( MyCustomIncludes(arr,2))
// let arr=["hi","hello","bye"]
// console.log(MyCustomIncludes(arr,"hi"))
let arr=[30,40,50]
console.log(MyCustomIncludes(arr,60))



