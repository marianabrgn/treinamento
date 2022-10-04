package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Dados;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {
   @Autowired

    @RequestMapping(value="/teste", method = RequestMethod.GET)
        public ResponseEntity get(){
System.out.println("aqui");
            String teste ="asd";
            return ResponseEntity.ok().body("{nome:"+teste+"}"); 
        }

    @PutMapping(value="/{id}") 
        public ResponseEntity <String> update(/* @PathVariable("id") long id, @RequestBody */ ){
            return ResponseEntity.ok().body("atualizar"); 
        }
    
    @PostMapping(value ="/post") 
        public ResponseEntity <String> post(@RequestBody Object data){
            System.out.println(data);
            return ResponseEntity.ok().body("post"); 
        }

    @DeleteMapping(value="/{id}") 
    public ResponseEntity <String> delete(){
        return ResponseEntity.ok().body("delete"); 
    }
    
}



