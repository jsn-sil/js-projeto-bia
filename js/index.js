let numeroGerado = parseInt(Math.random() * 100);

let numeroDigitado = Number(numero.value)
let tentativas = [];

numeroGerado.onchange = () => {
    if (tentativas.length < 10){
        if(tentativas.length > 0){
            for(let i = 0; i < tentativas.length; i++){
                if(tentativas[i] == numeroDigitado){
                    alert("Este numero ja foi digitado");
                    numero.value ='';
                    return;
                }
            }

        }
        tentativas.push(numeroDigitado);
        if(numeroDigitado > numeroGerado){
            alert('Bia está pensando em um numero maior')
} else if ( numeroDigitado < numeroGerado){
    alert('Bia está pensando em um numero maior ')
}
        numero.values = '';
        palpites.innertHTML = tentativas.join ('-');
    } else {
        alert("Acabou as tentativas");
    }
}
