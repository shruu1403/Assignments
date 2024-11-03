function MyCustomLastIndexOf(arr,value)
{
    for(let i=arr.length-1;i>=0;i--)
    {
       if(arr[i]==value)
       {
        return i
       }
    }
        return -1
}
let arr=[10,20,30,40,50]
console.log(MyCustomLastIndexOf(arr,40))

