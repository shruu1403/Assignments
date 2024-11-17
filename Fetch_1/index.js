let submit=document.getElementById("submit")
let display=document.getElementById("display")
let cont=document.getElementById("container")
let details=[]

submit.addEventListener("click",function()
{
    let person={}
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value

    person.name=name
    person.age=age

    details.push(person)
    name=null
    age=null
});

let Sno=1
display.addEventListener("click",function()
{
    details.forEach((ele)=>
    {
        let table=document.createElement("div")
        let serno=document.createElement("P")
        let name=document.createElement("h3")
        let age=document.createElement("p")

        serno.textContent="SerialNo : "+Sno
        Sno++
        name.textContent="Name : "+ele.name
        age.textContent="Age : "+ele.age

        table.append(serno,name,age)
        cont.append(table)

        

    })

})