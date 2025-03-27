const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const submit = document.getElementById('submit');

let result = document.getElementById('result');
let class_ = document.getElementById('class');

submit.addEventListener("click", () => {
    let imc = peso.value / altura.value**2;
    let class_result = "";
    if(imc < 18.5){
        class_result = "Baixo Peso";
    }else if(imc < 25){
        class_result = "Peso Normal";
    }else if(imc < 30){
        class_result = "Excesso de peso";
    }else if(imc == 30){
        class_result = "Obesidade";
    }else if(imc < 35){
        class_result = "Obesidade classe I";
    }else if(imc < 40){
        class_result = "Obesidade Classe II";
    }else{
        class_result = "Obesidade Mórbida";
    };

    if( isNaN(imc)){
        result.innerHTML = "Resultado: ERRO: valores inválidos(apenas números são permitidos)";
        class_.innerHTML = "Classificação: Nulo";
    }else{
        result.innerHTML = "Resultado: " + imc.toFixed(2) + "kg/m²"
        class_.innerHTML = "Classificação: " + class_result;
    };

});


