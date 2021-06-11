
    let quality = document.querySelector('#quality1');
    let pers1 = document.querySelector('#pers1');
    let pers2 = document.querySelector('#pers2');
    let num1 = 0;
    let num2 = 1595
    quality.onchange = function(){
        var index = quality.selectedIndex; //Selected Index
    let pie = document.querySelector('#pie').innerHTML;
       
        var value = quality.options[index].value; // Selected values
     
     num1 =  (Number(pie) * value).toFixed(2)
     document.querySelector('#money').innerHTML = '$'+num1
     pers1.innerHTML = ''
     pers1.innerHTML = ''
     pers1.innerHTML = Number(num1)+ Number(num2)
     pers2.innerHTML =  Number(num1)+ Number(num2)
    }


    let quality2 = document.querySelector('#quality2');


    quality2.onchange = function(){
    var index = quality2.selectedIndex; // Selected Index
    let pie1 = document.querySelector('#pie1').innerHTML;
       
        var value = quality2.options[index].value; // Selected values
     
     num2 =  (Number(pie1) * value).toFixed(2)
     document.querySelector('#money2').innerHTML = '$'+num2
     pers1.innerHTML = ''
     pers1.innerHTML = ''
     pers1.innerHTML = Number(num1)+ Number(num2)
     pers2.innerHTML =  Number(num1)+ Number(num2)


    }