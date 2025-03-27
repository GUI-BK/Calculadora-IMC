const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const submit = document.getElementById('submit');

submit.addEventListener("click", () => {
    let imc = peso.value / altura.value**2;
    if( isNaN(imc)){
        alert("Erro: valores inválidos");
    }else{
        alert(imc + "kg/m²");
    };

});


