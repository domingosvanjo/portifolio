var form = document.querySelector(".formcontato__form");
var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var assunto = document.querySelector("#assunto");
var msg = document.querySelector("#mensagem");
var enviar = document.querySelector('.formcontato__botao');
var expressao = new RegExp("^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+", "i");

enviar.disabled = true;

document.body.addEventListener('keydown', function(){
    
    if(nome.value =="" || email.value =="" || assunto.value =="" || msg.value ==""){
        enviar.disabled = true;
    }else{
        enviar.disabled = false;
    }
})


enviar.addEventListener('click', function(event){
    var ul = document.querySelector("#formcontato__validate");
    var erros = validaForm();
    event.preventDefault();
    
    if(erros.length > 0){
        ul.classList.remove('invisivel');
        exibeMensagensDeErro(erros);
        return; //retornando vazio ele sai da função a partir desse ponto.
    }else{
        ul.classList.add('invisivel');
        ul.innerHTML= "";
    }
    form.submit();
    //alert('Sua mensagem foi enviada. Assim que puder entrarei em contato com você.')
    form.reset();
})


function validaForm(){
    var erros = [];

    if(nome.value =="" || nome.value.length<=3){
        erros.push("Por favor informe seu nome!");
    }
    if(nome.value.length > 50){
        erros.push("Nome maior que 50 caracteres!");
    }
    if(email.value==""){
        erros.push("Por favor, informe seu e-mail!");
    }else if(!expressao.test(email.value)){
        erros.push("E-mail inválido!");
    }
    if(assunto.value == ""){
        erros.push("Por favor, informe o assunto!");
    }else if(assunto.value.length > 50){
        erros.push("Assunto maior que 50 caracteres!");
    }
    if(mensagem.value == ""){
        erros.push("Por favor, insira uma mensagem!");
    }else if(mensagem.value.length > 300){
        erros.push("A mensagem não pode ser maior que 300 caracteres!");
    }
    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#formcontato__validate");
    ul.innerHTML= "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}