function Converter(){
    var valorElemento = document.getElementById("valor");

    var valor = valorElemento.value
    var valor = valorEmDolorNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolorNumerico * 5.251
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}