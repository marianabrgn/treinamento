import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { FormGroup, FormControl } from "@angular/forms";
import { ConfigService } from 'src/services/cep.service';
import { Endereco } from 'src/models/endereco.module';
import { ApiService } from 'src/services/api.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})

export class UsuarioComponent implements OnInit {

  estados = [{ uf: 'AC', nome: 'Acre' },
  { uf: 'AL', nome: 'Alagoas' },
  { uf: 'AP', nome: 'Amapá' },
  { uf: 'AM', nome: 'Amazonas' },
  { uf: 'BA', nome: 'Bahia' },
  { uf: 'CE', nome: 'Ceará' },
  { uf: 'DF', nome: 'Distrito Federal' },
  { uf: 'ES', nome: 'Espirito Santo' },
  { uf: 'GO', nome: 'Goiás' },
  { uf: 'MA', nome: 'Maranhão' },
  { uf: 'MS', nome: 'Mato Grosso do Sul' },
  { uf: 'MT', nome: 'Mato Grosso' },
  { uf: 'MG', nome: 'Minas Gerais' },
  { uf: 'PA', nome: 'Pará' },
  { uf: 'PB', nome: 'Paraíba' },
  { uf: 'PR', nome: 'Paraná' },
  { uf: 'PE', nome: 'Pernambuco' },
  { uf: 'PI', nome: 'Piauí' },
  { uf: 'RJ', nome: 'Rio de Janeiro' },
  { uf: 'RN', nome: 'Rio Grande do Norte' },
  { uf: 'RS', nome: 'Rio Grande do Sul' },
  { uf: 'RO', nome: 'Rondônia' },
  { uf: 'RR', nome: 'Roraima' },
  { uf: 'SC', nome: 'Santa Catarina' },
  { uf: 'SP', nome: 'São Paulo' },
  { uf: 'SE', nome: 'Sergipe' },
  { uf: 'TO', nome: 'Tocantins' }];
  tabela: Array<Usuario> = [];
  form: FormGroup | any;
  formModal: FormGroup | any;
  estadosCivis = ["solteiro(a)", "casado(a)", "viúvo(a)", "divorciado(a)", "separado(a)"];
  mostrarModal: boolean = false;
  constructor(
    public cep: ConfigService,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.mapearFormulario(new Usuario, new Endereco);
    this.atualizarTela();

  }

  atualizarTela(){
    setTimeout(() => {
      this.preencherTabela();
      this.atualizarTela();
    },5000)
  }
  async mapearFormulario(user: Usuario, endereco: Endereco) {
    this.form = new FormGroup({
      nome: new FormControl(user.nome),
      cpf: new FormControl(user.cpf),
      estadoCivil: new FormControl(user.estadoCivil),
      email: new FormControl(user.email),
      dataNascimento: new FormControl(user.dataNascimento),
      telefone: new FormControl(user.telefone),
      cep: new FormControl(user.cep),
      numero: new FormControl(user.numero),
      rua: new FormControl(endereco.logradouro),
      bairro: new FormControl(endereco.bairro),
      cidade: new FormControl(endereco.localidade),
      estado: new FormControl(endereco.uf)
    })
  }
  async mapearDadosEditados(user: Usuario) {
    this.formModal = new FormGroup({
      nome: new FormControl(user.nome),
      cpf: new FormControl(user.cpf),
      estadoCivil: new FormControl(user.estadoCivil),
      email: new FormControl(user.email),
      dataNascimento: new FormControl(user.dataNascimento),
      telefone: new FormControl(user.telefone),
      cep: new FormControl(user.cep),
      numero: new FormControl(user.numero),
      rua: new FormControl(user.rua),
      bairro: new FormControl(user.bairro),
      cidade: new FormControl(user.cidade),
      estado: new FormControl(user.estado)
    })
  }

  preencherEndereco(formulario: String) {
    if (formulario === "mapearFormulario") {
      this.cep.listarDadosEndereco(this.form.value.cep).subscribe(response => {
        console.log(response);
        this.mapearFormulario(this.form.value, response);
      });
    } //else if (formulario === "mapearDadosEditados") {
    //   this.cep.listarDadosEndereco(this.form.value.cep).subscribe(response => {
    //     this.mapearDadosEditados(this.form.value, response);
    //   });
    // }
  }

  preencherTabela() {
    this.api.getAllUsuarioDados().subscribe(response => {
      this.tabela = response;
    });
  }

  recebeDados() {
    let validar = true;
    for (let i = 0; i < this.tabela.length; i++) {
      if (this.tabela[i].cpf === this.form.value.cpf || this.form.value.cpf == "" || this.form.value.cpf.length < 11) {
        validar = false;
      }
    }

    if (validar) {
      this.api.post(this.form.value).subscribe(response => {
        this.preencherTabela();
      });
    }
  }

  // construirTabela(){
  //     const main = document.querySelector(".main");
  //     const tabelaContainer = document.createElement('div');
  //     const tabela = document.createElement('table');
  //     const linha = document.createElement('tr');
  //     const linha1 = document.createElement('tr');
  //     const coluna = document.createElement('td');
  //     const coluna1 = document.createElement('td');
  //     const coluna2 = document.createElement('td');
  //     const coluna3 = document.createElement('td');
  //     const botaoAtualizar = document.createElement('button');
  //     const botaoDelete = document.createElement('button');

  //     // tabelaContainer.classList.add("tabela-container");
  //     tabela.classList.add('tabela');
  //     linha.classList.add('linha');
  //     // botaoAtualizar.classList.add("botao");
  //     // botaoDelete.classList.add("botao");
  //     coluna.innerHTML = `${this.form.value.nome}`;
  //     coluna1.innerHTML = `${this.form.value.email}`;
  //     coluna2.innerHTML = `${this.form.value.cpf}`;
  //     coluna3.innerHTML = `${this.form.value.cep}`;
  //     botaoAtualizar.textContent = `Atualizar`;
  //     botaoDelete.textContent = `Deletar`;

  //     main?.appendChild(tabelaContainer);
  //     tabelaContainer?.appendChild(tabela);
  //     tabela?.appendChild(linha);
  //     linha?.appendChild(coluna);
  //     linha?.appendChild(coluna1);
  //     tabela?.appendChild(linha1);
  //     linha1?.appendChild(coluna2);
  //     linha1?.appendChild(coluna3);
  //     tabelaContainer?.appendChild(botaoAtualizar);
  //     tabelaContainer?.appendChild(botaoDelete);

  //     botaoAtualizar?.addEventListener('click', () => { this.atualizarDadosCadastrados("atualizar"); });
  //     botaoDelete?.addEventListener('click', () => { this.deletarDadosCadastrados("deletar"); } );

  // }

  // deletarTabela(){
  //   const tabelaContainer = document.querySelector(".tabela-container");
  //   tabelaContainer?.remove();
  // }

  atualizarDadosCadastrados(user: Usuario) {
    this.mapearDadosEditados(user);
    this.mostrarModal = true;
    // this.preencherEndereco('mapearDadosEditados');

    // console.log(id);
    // console.log(this.formModal.value);
    // this.api.getAllUsuarioDados().subscribe(response => {

    //   console.log(response);
    // }
  }

  deletarDadosCadastrados(id: Usuario) {
    this.api.delete(id.cpf).subscribe(response => {
      this.preencherTabela();
    });
    // this.tabela.pop();
  }

  editarDados() {
    this.mostrarModal = false;

    this.api.update(this.formModal.value).subscribe(response => {
      this.preencherTabela();
    });

  }
  sairModal() {
    this.mostrarModal = false;

  }
}

  // this.api.delete(this.form.value.cpf).subscribe(response => {
  //   console.log(response);
  // });






