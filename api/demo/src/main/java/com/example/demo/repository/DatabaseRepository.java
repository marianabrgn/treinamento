package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.UsuarioDados;

interface DatabaseRepository extends JpaRepository<UsuarioDados, Integer>{
    
}
