package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.UsuarioDados;
import com.example.demo.service.UsuarioService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")

public class UsuarioController {

    @Autowired(required = true)
    private UsuarioService usuarioService;

    @GetMapping()
        public ResponseEntity <List<UsuarioDados>> getAllUsuarioDados(){
            List<UsuarioDados> dadosTabela = usuarioService.atualizarTabela();
            return ResponseEntity.ok().body(dadosTabela); 
        }

    @PutMapping() 
        public ResponseEntity <String> update(@RequestBody UsuarioDados data){
            String response = usuarioService.editarDados(data);
            return ResponseEntity.ok().body("{\"data\":\""+response+"\"}"); 
        }
    
    @PostMapping() 
        public ResponseEntity <String> post(@RequestBody UsuarioDados data){
            String response = usuarioService.salvarDados(data);
            return ResponseEntity.ok().body("{\"data\":\""+response+"\"}"); 
        }

    @DeleteMapping(value="/{id}") 
        public ResponseEntity <String> delete(@PathVariable String id){
            usuarioService.deletarDados(id);
            String response = "Dados deletados";
            return ResponseEntity.ok().body("{\"data\":\""+response+"\"}"); 
        }
}



