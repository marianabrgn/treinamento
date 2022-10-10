package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.UsuarioDados;

interface databaseRepository extends JpaRepository<UsuarioDados, Integer>{
    
    
}
