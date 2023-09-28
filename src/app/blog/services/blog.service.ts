import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '../models/blog-model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { };

  getUsers(paging?: PageEvent) {
    return this.http.get<any>(`https://dummyjson.com/users?skip=${paging?.first}&limit=${paging?.rows}`);
  }
  getPosts(paging?: PageEvent) {
    return this.http.get<any>(`https://dummyjson.com/posts?skip=${paging?.first}&limit=${paging?.rows}`);
  }

}
