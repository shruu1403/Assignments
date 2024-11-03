function MyCustomSlice(arr,start=0,end=arr.length)
{
    let bag=[]
    for(let i=start;i<end;i++)
    {
        bag.push(arr[i])
    }
    return bag 
}
let arr=[20,30,40,50,60]
console.log(MyCustomSlice(arr,1,4))
console.log(MyCustomSlice(arr,2,5))
console.log(MyCustomSlice(arr,-4,-1))




