let productContainer=document.getElementById("product-container")

//takes data and updates to DOM
function displayData(products)
{
    productContainer.innerHTML=""
    products.forEach(function(prod)    //loops through each product in products array
{
    //for each prod:
    let productCard=document.createElement("div")

    let titleElement=document.createElement("p")
    titleElement.textContent="Title :" + prod.name

    let idElement=document.createElement("p")
    idElement.textContent="ID :" +prod.id 

    productCard.append(titleElement,idElement)
    productContainer.append(productCard)
})
}

//fetch data and pass data to displayData

function fetchDataFromServerAsync(cbFunc)  //cbFunc is a call back func used to handle data after it's fetched
{
    console.log("fetching data from server asynchronously...")

    setTimeout(function ()
{
    console.log("data fetched and now DOM is being updated")
    const data =[
        { id :1 , name: "cinthol soap"},
        { id :2 , name: "deo"},
    ]
    cbFunc(data)    // after 2 secs ,message logs and calls cbFunc with a sample data
} ,2000)
}

console.log("start of code")
fetchDataFromServerAsync(displayData)   //initaiting the fetch
console.log("remaining code")
console.log("end of code")