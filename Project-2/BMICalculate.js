const button=document.querySelector('button');
let BMI;
button.addEventListener('click',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#txtheight').value)
    const weight=parseInt(document.querySelector('#txtweight').value)
    const result=document.querySelector('#result')

    if(height=="" || isNaN(height) || height <0 )
    {
    result.innerHTML='Please enter valid height'
    }
    else if(weight=="" || isNaN(weight) || weight< 0){
    result.innerHTML='Please enter valid weight'
    }
    else{
    BMI= (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML=`BMI is: ${BMI}`
    }

    if(BMI <= 18.6)
    resultguide.innerHTML=`<span>You are under weight</span>`
    else if(BMI > 18.6 && BMI < 24.9)
    resultguide.innerHTML=`<span>You ae in normal range</span>`
    else if(BMI > 24.9)
    resultguide.innerHTML=`<span>You are overweight </span>`

   

});