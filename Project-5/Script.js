const start=document.getElementById('start')
console.log(start)
const stop=document.getElementById('stop')
console.log(stop)
generateRandomColor()
let changecolor;
function generateRandomColor()
{
    let number='#'
    const hex='0123456789ABCEDF'
    for(i=0;i<=5;i++)
        {
            const random=Math.floor(Math.random()*16)
            number+=hex[random]
        }
    return number
}
start.addEventListener('click',function(e)
{
    changecolor=setInterval(() => {
        document.body.style.backgroundColor=generateRandomColor()
    }, 1000);
  
})
stop.addEventListener('click',function(){
    console.log("stop");
    clearInterval(changecolor)
})