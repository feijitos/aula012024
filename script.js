let elementonome = document.GetElementById("nome").value;
let botaosubmeter = document.GetElementById("botao-submeter");
botaosubmeter.addEventListener("click",submeter);
function submeter(){
    alert("função submeter");
    let elementonome = document.GetElementById("nome").value;
    console.log(elementonome);
}