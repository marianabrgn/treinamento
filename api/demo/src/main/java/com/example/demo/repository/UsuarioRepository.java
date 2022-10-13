package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.model.UsuarioDados;

@Repository
public class UsuarioRepository {
    @Autowired
    DatabaseRepository databaseRepository;

    public List<UsuarioDados> usuarioDados = new ArrayList <UsuarioDados>();

    public List<UsuarioDados> atualizarTabela(){
        return databaseRepository.findAll();
    }
    public String salvarDados(UsuarioDados data){
        // usuarioDados.add(data);
        databaseRepository.save(data);
        return "Success";
    }
    public String deletarDados(Integer id) {
        databaseRepository.deleteById(id);
        // for(int i = 0; i < usuarioDados.size(); i++){
        //     if(usuarioDados.get(i).getCpf().equals(data)){
        //         usuarioDados.remove(i);
        //     }
       return "Data deleted";
    }
    public String editarDados(Integer id, UsuarioDados data) {
        
        UsuarioDados dadosBD = databaseRepository.findById(id).get();

        dadosBD.setNome(data.getNome());
        dadosBD.setEmail(data.getEmail());
        dadosBD.setTelefone(data.getTelefone());

        dadosBD.setDataNascimento(data.getDataNascimento());
        dadosBD.setEstadoCivil(data.getEstadoCivil());
        dadosBD.setCep(data.getCep());
        dadosBD.setRua(data.getRua());
        dadosBD.setBairro(data.getBairro());
        dadosBD.setNumero(data.getNumero());
        dadosBD.setCidade(data.getCidade());
        dadosBD.setEstado(data.getEstado());


        databaseRepository.save(dadosBD);
        

        // for(int i = 0; i < usuarioDados.size(); i++){
        //     if(usuarioDados.get(i).getCpf().equals(data.getCpf())){
        //         usuarioDados.set(i, data);
        //     }
        // }
        System.out.println(id);
        return "Success editing";
    }
}
