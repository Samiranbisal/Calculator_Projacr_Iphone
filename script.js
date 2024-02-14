let input = document.querySelector('#InputBox');
let buttons = document.querySelectorAll('button');
// alert("hi");

let strings = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            strings = eval(strings);
            input.value = strings;
        }else if(e.target.innerHTML == 'Ac'){
            strings = "";
            input.value = strings;
        }else if(e.target.innerHTML == 'DEL'){
            strings = strings.substring(0, strings.length -1);
            input.value = strings;
        }else{
            console.log(e.target);
            strings += e.target.innerHTML;
            input.value = strings;
        }
    })
})