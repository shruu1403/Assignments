let URL=""
function login()
{
    try{
    let emailInputElementValue=document.getElementById("email-input").value
    let passwordInputElementInputValue=document.getElementById("password-input").value

    let userDetail={
        email:emailInputElementValue,
        password:passwordInputElementInputValue,
    }
    let res= fetch(URL,{
        method:"POST",
        headers:{
        "Content-Type":"application/json",
    },
        body:JSON.stringify(userDetail),
})
let data= res.json()

if (data.token)
{
    console.log("success login")
}
    }
catch(error){
    console.log(error)
}
}