package com.example.demo.repository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.UsuarioDados;

@Repository

public class UsuarioRepository {

    public List<UsuarioDados> usuarioDados = new ArrayList <UsuarioDados>();

    public List<UsuarioDados> atualizarTabela(){
        return usuarioDados;
    }
    public String salvarDados(UsuarioDados data){
        // System.out.println(data.getNome());
        usuarioDados.add(data);
        return "Success";
    }

    public String deletarDados(String data) {
        for(int i = 0; i < usuarioDados.size(); i++){
            if(usuarioDados.get(i).getCpf().equals(data)){
                usuarioDados.remove(i);
            }
        }      
       return "Data deleted";
    }

    public String editarDados(UsuarioDados data) {
        for(int i = 0; i < usuarioDados.size(); i++){
            if(usuarioDados.get(i).getCpf().equals(data.getCpf())){
                System.out.println("aqui está chegando");
                usuarioDados.set(i, data);
            }
        }        
        return "Success editing";
    }


}
