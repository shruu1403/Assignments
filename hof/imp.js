//capitalise the first letter of each word in an array
let words=["hello","bye","okay"]
let ans=words.map(ele => ele[0].toUpperCase() + ele.slice(1))
console.log(ans)

//slice=returns the left overs leaving the one given in bracket..here 1 is given so it returns ello
// and hence added with uppercased

//extract even no. from array and return its double
let arr=[1,2,3,4,5,6,7,8]
let anss=arr.filter(ele => ele%2==0).map(ele => ele*2)
console.log(anss)
