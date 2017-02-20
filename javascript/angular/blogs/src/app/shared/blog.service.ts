import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Blog } from '../shared/blog';
import { Post } from '../shared/post';

@Injectable()
export class BlogService {
  private apiEndpoint = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: Http) { }

  fetchBlogs(): Observable<Blog[]> {
    return this.http.get(this.apiEndpoint + 'users')
      .map(res => res.json() // turn observable stream into array
        .map(u => { // turn array into array of these
          return {
            name: u.name,
            website: u.website,
            company: u.company.name,
            id: u.id
          };
        }));
  }

  fetchBlog(id: number): Observable<string> {
    return this.http.get(this.apiEndpoint + 'users?id=' + id)
      .map(res => res.json() // turn observable stream into array
        .map(u => { // turn array into array of these
          return {
            name: u.name,
            website: u.website,
            company: u.company.name,
            id: u.id
          };
        })[0]);
  }

  fetchPosts(id: number): Observable<Post[]> {
    return this.http.get(this.apiEndpoint + 'posts?userId=' + id)
      .map(res => res.json()); // turn observable stream into array
  }
}
