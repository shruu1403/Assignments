export function printData(data,mainroot)
{
    data.forEach(function(product)
{
    //create card which will have all info wrt product
    let productCard=document.createElement("div")
    productCard.className="prod-card"

    //create an image
    let productImage=document.createElement("img")
    productImage.src=product.image

    //create id
    let productId=document.createElement("p")
    productId.textContent=product.id

    //create Name
    let productName=document.createElement("h3")
    productName.className="prod-name"
    productName.textContent=product.title

    //create category
    let productCategory=document.createElement("h4")
    productCategory.className="prod-cat"
    productCategory.textContent=product.category

    //create price
    let productPrice=document.createElement("p")
    productPrice.className="prod-price"
    productPrice.textContent=product.price

    //create description
    let productDesc=document.createElement("P")
    productDesc.className="prod-desc"
    productDesc.textContent=product.description

    productCard.append(productImage,productId,productName,productCategory,productPrice,productDesc)
    mainroot.append(productCard)
})
}

