import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.getAllUsers().http.get('http://localhost:8080/findAllUsers');
  }
}
