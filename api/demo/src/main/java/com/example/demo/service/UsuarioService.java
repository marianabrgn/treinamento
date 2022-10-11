package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.UsuarioDados;
import com.example.demo.repository.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    public List<UsuarioDados> atualizarTabela(){
        return usuarioRepository.atualizarTabela();
    }

    public String salvarDados(UsuarioDados data){
        return usuarioRepository.salvarDados(data);
    }

    public String deletarDados(Integer id) {
        return usuarioRepository.deletarDados(id);
    }

    public String editarDados(UsuarioDados data) {
        return usuarioRepository.editarDados(data);
    }
}
