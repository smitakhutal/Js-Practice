const form=document.querySelector('#btncalculate');
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#txtheight').value)
    const width=parseInt(document.querySelector('#txtwidth').value)
    const result=document.querySelector('#result')

    console.log(`height:${height} and width:${width}`);

});