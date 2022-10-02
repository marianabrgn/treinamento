window.onload = () => {
    instanciaCampos();
    estadosArray.forEach((estado) => {
        option = new Option(estado, estado);
        campoEstados.options[campoEstados.options.length] = option;
    });

    estadosCivis.forEach((estadoCivil) => {
        option = new Option(estadoCivil);
        campoEstadosCivis.options[campoEstadosCivis.options.length] = option;
    });
}

function instanciaCampos(){
    const dadosFormularios = {
        nome : document.getElementById("nome").value,
        cpf : document.getElementById("cpf").value,
        email : document.getElementById("email").value,
        dataNascimento : document.getElementById("data-nascimento").value,
        telefone : document.getElementById("telefone").value,
        cep : document.getElementById("cep").value,
        rua : document.getElementById("rua").value,
        numero : document.getElementById("numero").value,
        bairro : document.getElementById("bairro").value,
        cidade : document.getElementById("cidade").value,
        estado : document.getElementById("estados").value
        };
    return dadosFormularios;
}

const container = document.getElementById("container");
const submit = document.getElementById("submit");
const campoEstados = document.getElementById("estados");
const camposRegistro = document.querySelectorAll(".campo");
const estadosArray = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',];
const estadosCivis = ["Solteiro(a)", "Casado(a)", "Viúvo(a)", "Divorciado(a)", "Separado(a)"];
const campoEstadosCivis = document.getElementById("estado-civil");

function recebeDados(){
    const dadosFormularios = instanciaCampos();
    trataDados(dadosFormularios);
}

function trataDados(dadosFormularios) {
    let erro = false;
    let contagemErro = 0;
    Object.keys(dadosFormularios).forEach(key => {
        if(dadosFormularios[key] === ""){
            erro = true;
            ++contagemErro;
            console.log(dadosFormularios[key]);
        }
    });
    const mensagemErroContainer = document.createElement('button');
    
    if(erro){
        const mensagemErro = document.createElement('p');
        if(contagemErro > 1){
            mensagemErro.innerHTML = `Erro. Alguns campos vazios.`;
        } else if (contagemErro === 1){
            mensagemErro.innerHTML = `Erro. Algum campo vazio.`;
        }    
        container.appendChild(mensagemErroContainer);
        mensagemErroContainer.appendChild(mensagemErro);
        mensagemErroContainer.classList.toggle("mensagem-erro");
    } else {
        Object.keys(dadosFormularios).forEach(key => {
            console.log(dadosFormularios[key]);
        });
    }

    camposRegistro.forEach(campo => campo.addEventListener('focus', () => {
        mensagemErroContainer.remove();
    }));

}

submit.addEventListener('click', recebeDados);

document.getElementById("cpf").addEventListener('blur', () => { 
    document.getElementById("cpf").value = document.getElementById("cpf").value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
);

document.getElementById("cep").addEventListener('blur', () => { 
    document.getElementById("cep").value = document.getElementById("cep").value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{3})\d+?$/, '$1')}
);

document.getElementById("telefone").addEventListener('blur', () => { 
    document.getElementById("telefone").value = document.getElementById("telefone").value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')}
);