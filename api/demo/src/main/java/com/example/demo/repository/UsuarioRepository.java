package com.example.demo.repository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.UsuarioDados;

@Repository

public class UsuarioRepository {

    public List<UsuarioDados> usuarioDados = new ArrayList <UsuarioDados>();
    

    public String salvarDados(UsuarioDados data){
        System.out.println(data.getNome());
        usuarioDados.add(data);
        System.out.println(usuarioDados);

        //UsuarioDados dados = data;
        return "ok";
    }

}

// public interface UsuarioRepository extends JpaRepository <UsuarioDados, Long> {

// }