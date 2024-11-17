import navbar from "./components/navbar.js"
import { printData } from "./utility/utils.js"

let navbarContainerElement=document.getElementById("navbar-container")
 navbarContainerElement.innerHTML=navbar()
let rootElement=document.getElementById("root")
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(function(res)
    {
        return res.json()  //converting raw data into usable format
    })
    .then(function(data)   //data passed in correct form to use 
{
    console.log(data)
    printData(data,rootElement) //function call to display data
})
.catch(function(err)
{
    console.log(err)
})
