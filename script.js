let output = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let number = "";

buttons.forEach((button) => {
    button.addEventListener('click' , a =>{
        if(a.target.innerHTML == '='){
            number = eval(number);
            output.value = number;
        }
        else if(a.target.innerHTML == 'AC'){
            number = "";
            output.value = number;
        }
        else if(a.target.innerHTML == '⌫'){
            number = number.slice(0, number.length-1);
            output.value = number;
        }
        else{
            number += a.target.innerHTML;
            output.value = number;
        }

    })
})