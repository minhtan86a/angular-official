import { PostEntity } from './../model/post-entity';
import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
    post$!: Observable<PostEntity[]>;

    constructor(
        private postService: PostService
    ) { }

    ngOnInit(): void {
        //Get all posts
        this.post$ = this.postService.getListPosts();

        //Create a post
        const createPost = this.postService.createPost({ title: 'test 101', body: 'content 101'});
        createPost.subscribe(rs => console.log(rs));

        //Update a post
        const updatePost = this.postService.updatePost( 1, { title: 'test', body: 'content test'});
        updatePost.subscribe(rs => console.log(rs));

        //update a part of post
        const updatePatchPost = this.postService.updateOptionPost(1, {title: 'abc'});
        updatePatchPost.subscribe(rs => console.log(rs));

        //delete a post
        const deletePost = this.postService.deletePost(1);
        deletePost.subscribe(rs => console.log(rs));
    }

}
