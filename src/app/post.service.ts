import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url: string = "https://jsonplaceholder.typicode.com/typicode/demo/posts";

  constructor(private http: HttpClient) { }

  getPosts():Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url);
  }

  // createPosts(){

  // }
}
