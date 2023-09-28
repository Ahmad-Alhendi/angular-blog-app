import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '../models/blog-model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { };

  getUsers() {
    return this.http.get<any>('https://dummyjson.com/users');
  }
  getPosts() {
    return this.http.get<any>('https://dummyjson.com/posts');
  }

}
