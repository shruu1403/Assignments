let display=document.getElementById("display")
let increment=document.getElementById("increment")
let decrement=document.getElementById("decrement")
let start=document.getElementById("start")
let isRunning=false
let myInterval

function startstop()
{
    if(isRunning)
    {
        isRunning=false
        clearInterval(myInterval)
        start.textContent="START"
        start.style.backgroundColor="green"
    }
    else{
        isRunning=true
        start.textContent="STOP"
        start.style.backgroundColor="red"

        myInterval=setInterval(()=>
        {
            let num=Number(display.innerText)
            num++
            display.innerText=num
        },1000)
    }
}
increment.addEventListener("click",()=>
{
    if(isRunning)
    {
        startstop()
    }
    let num=Number(display.innerText)
    num++
    display.innerText=num
})
decrement.addEventListener("click",()=>
{
    if(isRunning)
    {
        startstop()
    }
    let num=Number(display.innerText)
    num--
    display.innerText=num
})