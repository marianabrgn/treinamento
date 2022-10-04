// excluir depois
package com.example.demo.model;

import javax.persistence.*;


 @Entity
// @Table(name = "dados")
public class Dados {
    // @Id
	// @GeneratedValue(strategy = GenerationType.AUTO)
	// private long id;

	// @Column(name = "title")
	// private String title;

	// @Column(name = "description")
	// private String description;

	// @Column(name = "published")
	// private boolean published;

    public String nome;
    public String cpf;
    public String email;
    public String telefone;
    public String dataNascimento;
    public String estadoCivil;
    public String cep;
    public String rua;
    public String numero;
    public String bairro;
    public String cidade;
    public String estado;

	// public void Tutorial() {

	// }
}


