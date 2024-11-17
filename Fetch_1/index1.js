let rootElement=document.getElementById("root")
function fetchData()
{
fetch("https://reqres.in/api/users/") //URL you are calling
.then(function(response)
{
return response.json()  //.json converts response to format we can easily work with
})
.then(function(resObj)    //do something with data
{
data=resObj.data
data.forEach(function(item)
{
//create div which will display the user information
let userCard=document.createElement("div")
userCard.className="user-card"

//create image element
let userImageElement=document.createElement("img")
userImageElement.src=item.avatar

//create a p tag which will display user's name
let userNameElement=document.createElement("h3")
userNameElement.textContent=item.first_name+" "+item.last_name

//create p tag which will display user's email
let userEmailElement=document.createElement("h4")
userEmailElement.textContent=item.email

//create p tag which will display user's id
let userIdElement=document.createElement("p")
userIdElement.textContent=item.id

userCard.append(userImageElement,userNameElement,userEmailElement,userIdElement)

//append user card to root element
rootElement.append(userCard)
})
})

.catch(function(error)
{
console.log("There was an error fetching the data",error)
})
} 