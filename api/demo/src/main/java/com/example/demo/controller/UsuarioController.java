package com.example.demo.controller;
import org.json.JSONObject;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UsuarioDados;
import com.example.demo.repository.UsuarioRepository;
import com.example.demo.service.UsuarioService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

@Autowired(required = true)
    private UsuarioService usuarioService;

    @RequestMapping(value="/usuarioDados", method = RequestMethod.GET)
        public String getAllUsuarioDados(){
            return "usuarioRepository";
        }
        // public ResponseEntity<Object>get(){
        //     Object teste = new UsuarioDados();

        //     return ResponseEntity.ok().body("{\"data\":\""+teste+"\"}");
        
        // }

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
    public ResponseEntity <String> delete(){
        return ResponseEntity.ok().body("delete"); 
    }
    
}



