let output = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let number = "";

buttons.forEach((button) => {
    button.addEventListener('click' , e =>{
        if(e.target.innerHTML == '='){
            number = eval(number);
            output.value = number;
        }
        else if(e.target.innerHTML == 'AC'){
            number = "";
            output.value = number;
        }
        else if(e.target.innerHTML == '⌫'){
            number = number.slice(0, number.length-1);
            output.value = number;
        }
        else{
            number += e.target.innerHTML;
            output.value = number;
        }

    })
})