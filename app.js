

function conversor(){
    const number = parseInt(document.getElementById('number').value);

    const selection = document.getElementById('selection').value;
    
    if (selection === '1'){
        document.getElementById('result').textContent = (number - 32) * 5 / 9;
    }else{
        document.getElementById('result').textContent = (number * 9) / 5 + 32;
    }
}