import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  url:string;
  constructor(private http: HttpClient) { 
    this.url = 'https://jsonplaceholder.typicode.com/';
  }

  obtenerPosts() {
    const url_api = this.url+`posts`;
    return this.http.get(url_api);
    };

  obtenerComments(id:number) {
    const url_api = this.url+`posts/`+id+`/comments`;
    return this.http.get(url_api);
    };
}
