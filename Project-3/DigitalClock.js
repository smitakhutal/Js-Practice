const load=document.getElementById('clock');
console.log(new Date().toLocaleTimeString());
setInterval(function(){
let date =new Date();
load.innerHTML=date.toLocaleTimeString();
},1000);