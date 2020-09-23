import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  // template:`
  //   <h2>Post List</h2>
  //   <ul *ngFor="let post of posts">
  //     <li>{{post.id}} {{post.title}} {{post.body}}</li>
  //   </ul>
  // `,
  templateUrl:'./post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public title = 'Homework';
  public posts:any = [];

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this._postService.getPosts()
        .subscribe(data => {
          console.log(data);
          this.posts =data;
        });
  }

  deletePost(id) {
    this.posts = this.posts.filter(item => {
      return item.id !== id;
    })
    this._postService.deletePost(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}

