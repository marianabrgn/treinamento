import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from 'src/models/endereco.module';


@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) {
        
    }
    
    listarDadosEndereco(cep:string) {
        return this.http.get<Endereco>('https://viacep.com.br/ws/' + cep + '/json/');
    }

    

}

