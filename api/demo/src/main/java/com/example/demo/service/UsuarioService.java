package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.UsuarioDados;
import com.example.demo.repository.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public String salvarDados(UsuarioDados data){
        return usuarioRepository.salvarDados(data);
    }

    public String deletarDados(String data) {
        return usuarioRepository.deletarDados(data);
    }


}
