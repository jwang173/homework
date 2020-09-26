import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
import { IPost } from '../post'


@Component({
  selector: 'app-post-create',
  // template:`
  //   <h1>
  //     Welcome to {{title}}
  //   <h1>
  // `,
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  title = "Hello";

  constructor(private _postService: PostService) { }
  // public newPost:IPost;

  ngOnInit(): void {
    
  }

  createPost(newPost:IPost) {
    this._postService.createPost(newPost).subscribe(
      newPost => {
        console.log(newPost);
      })
  }

}
