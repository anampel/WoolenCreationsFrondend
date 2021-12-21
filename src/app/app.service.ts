import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  findByUsername() {
    return this.http.get('http://localhost:8080/api/v1/user/findByUsername?username=anam@gmail.com');
  }
}


