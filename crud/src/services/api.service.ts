import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/models/usuario';


const baseUrl = 'http://localhost:8080/';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {  }
    
    getAllUsuarioDados() {
        return this.http.get(`${baseUrl}`);
    }

    update(id : any, data : any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    
    delete(id : String){
        console.log(id);
        return this.http.delete(`${baseUrl}${id}`);
    }

    post(usuario : Usuario) {
        return this.http.post(`${baseUrl}`, usuario);
    }

}

