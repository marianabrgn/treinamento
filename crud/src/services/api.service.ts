import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/models/usuario';

const baseUrl = 'http://localhost:8080/';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {  }
    
    getAll() {
        return this.http.get<object>(`${baseUrl}teste`);
    }

    update(id : any, data : any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    
    delete(id : any): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    post(data : Usuario) {
        console.log(data);
        return this.http.post<Object>(`${baseUrl}/crud/post`, data);
    }

}

