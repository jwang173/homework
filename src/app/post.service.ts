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

  getPosts() {
    return this.http.get(this._url);
  }

  deletePost(id){
    return this.http.delete(this._url+"/id");
  }
  
  // createPosts(id:number,title:string){
  //   const postData: IPost={id:id,title:title};
  //   this.http.post(this._url,postData).subscribe();
  // }
}
