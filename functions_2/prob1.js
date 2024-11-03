function MyCustomJoin(arr)
{
    let join=""
    for(let i=0;i<arr.length;i++)
    {
            join = join + arr[i]
    }
    return join
}
let x=MyCustomJoin(["fire","air","water"])
console.log(x)
