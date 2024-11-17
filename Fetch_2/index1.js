let root=document.getElementById("root")
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response)
{
    return response.json()
})
.then(function(resobj)
{
    data=resobj
    data.forEach(function(item)
{
    let row=document.createElement("tr")
    let id=document.createElement("td")
    let title=document.createElement("td")
    let status=document.createElement("td")

    id.textContent=item.id
    title.textContent=item.title
    status.textContent=item.completed

    row.append(id,title,status)
    root.append(row)
})
})
.catch(function(err)
{
    console.log(err)
})
