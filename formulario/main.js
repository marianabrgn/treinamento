window.onload = () => {
    const dadosFormularios = instanciaCampos();
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
const estadosArray = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',];
// const estados =[
//     { uf: 'AC', nome: 'Acre' },
//     { uf: 'AL', nome: 'Alagoas' },
//     { uf: 'AP', nome: 'Amapá' },
//     { uf: 'AM', nome: 'Amazonas' },
//     { uf: 'BA', nome: 'Bahia' },
//     { uf: 'CE', nome: 'Ceará' },
//     { uf: 'DF', nome: 'Distrito Federal' },
//     { uf: 'ES', nome: 'Espirito Santo' },
//     { uf: 'GO', nome: 'Goiás' },
//     { uf: 'MA', nome: 'Maranhão' },
//     { uf: 'MS', nome: 'Mato Grosso do Sul' },
//     { uf: 'MT', nome: 'Mato Grosso' },
//     { uf: 'MG', nome: 'Minas Gerais' },
//     { uf: 'PA', nome: 'Pará' },
//     { uf: 'PB', nome: 'Paraíba' },
//     { uf: 'PR', nome: 'Paraná' },
//     { uf: 'PE', nome: 'Pernambuco' },
//     { uf: 'PI', nome: 'Piauí' },
//     { uf: 'RJ', nome: 'Rio de Janeiro' },
//     { uf: 'RN', nome: 'Rio Grande do Norte' },
//     { uf: 'RS', nome: 'Rio Grande do Sul' },
//     { uf: 'RO', nome: 'Rondônia' },
//     { uf: 'RR', nome: 'Roraima' },
//     { uf: 'SC', nome: 'Santa Catarina' },
//     { uf: 'SP', nome: 'São Paulo' },
//     { uf: 'SE', nome: 'Sergipe' },
//     { uf: 'TO', nome: 'Tocantins' }
// ]

// const json = JSON.parse(estados);
estadosArray.forEach((estado) => {
    option = new Option(estado, estado);
    campoEstados.options[campoEstados.options.length] = option;
});

function recebeDados(){
    const dadosFormularios = instanciaCampos();
    trataDados(dadosFormularios);
}

document.getElementById("cpf").addEventListener('blur', () => { 
    document.getElementById("cpf").value = document.getElementById("cpf").value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
);

document.getElementById("cep").addEventListener('blur', () => { 
    document.getElementById("cep").value = document.getElementById("cep").value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{3})\d+?$/, '$1')}
);

document.getElementById("telefone").addEventListener('blur', () => { 
    document.getElementById("telefone").value = document.getElementById("telefone").value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')}
);

function trataDados(dadosFormularios) {
    let erro = false;
    let contagemErro = 0;
    Object.keys(dadosFormularios).forEach(key => {
        if(dadosFormularios[key] === ""){
            erro = true;
        }
    ++contagemErro;
        console.log(contagemErro);
    })
    const mensagemErroContainer = document.createElement('button');
    if(erro){
        const mensagemErro = document.createElement('p');
        mensagemErro.innerHTML = `Erro. Algum campo vazio.`;

        container.appendChild(mensagemErroContainer);
        mensagemErroContainer.appendChild(mensagemErro);

        mensagemErroContainer.classList.toggle("mensagem-erro");
        mensagemErroContainer.addEventListener("click", () => mensagemErroContainer.remove());
    } else {
        mensagemErroContainer.remove();
        Object.keys(dadosFormularios).forEach(key => {
            console.log(dadosFormularios[key]);
        });
    }
}

submit.addEventListener('click', recebeDados);
