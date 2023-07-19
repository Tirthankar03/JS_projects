let buttons = document.querySelectorAll('input[type="button"]');

let output = '';

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
        // console.log(e.target.value);
        if (e.target.value == '=') {
            output = eval(output);
            document.querySelector('input[type="text"]').value = output;
        }else if (e.target.value == 'Ac') {
            output = ' ';
            document.querySelector('input[type="text"]').value = output;
        }else if (e.target.value == 'DE') {
            output = output.toString().slice(0, -1);
            document.querySelector('input[type="text"]').value = output;
        }
        else{
            output += e.target.value;
            document.querySelector('input[type="text"]').value = output;
        }
        })
})