package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.UsuarioDados;
import com.example.demo.service.UsuarioService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class UsuarioController {

@Autowired(required = true)
    private UsuarioService usuarioService;

    @RequestMapping(value="/usuarioDados", method = RequestMethod.GET)
        public String getAllUsuarioDados(){
            return "usuarioRepository";
        }

    @PutMapping(value="/{id}") 
        public ResponseEntity <String> update(/* @PathVariable("id") long id, @RequestBody */ ){
            return ResponseEntity.ok().body("atualizar"); 
        }
    
    @PostMapping() 
        public ResponseEntity <String> post(@RequestBody UsuarioDados data){
            String response = usuarioService.salvarDados(data);
            return ResponseEntity.ok().body("{\"data\":\""+response+"\"}"); 
        }

    @DeleteMapping(value="/{id}") 
    // public ResponseEntity <String> delete(@PathVariable String id){
    //     usuarioService.deletarDados(id);
    //     String response = "Dados deletados";
    //     return ResponseEntity.ok().body("{\"data\":\""+response+"\"}"); 
    // }
    public String delete(@PathVariable String id){
        usuarioService.deletarDados(id);
        return "dados deletados"; 
    }
    
}



