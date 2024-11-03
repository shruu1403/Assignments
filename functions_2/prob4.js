function MyCustomSubstring(str,start=0,end=str.length)
{
    let bag=""
    for(let i=start;i<end;i++)
    {
        bag=bag+str[i]
    }
    return bag
}
let str="mozilla"
console.log(MyCustomSubstring(str,2,4))
console.log(MyCustomSubstring(str,1,3))

