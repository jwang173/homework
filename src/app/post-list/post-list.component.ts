import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  template:`
    <h2>Post List</h2>
    <ul *ngFor="let post of posts">
      <li>{{post.id}}:{{post.title}}</li>
    </ul>
  `,
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts = [];

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this._postService.getPosts()
        .subscribe(data => this.posts =data);
  }

}

