import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './model/post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-rxjs-tutorial',
  templateUrl: './rxjs-tutorial.component.html',
  styleUrls: ['./rxjs-tutorial.component.scss']
})
export class RxjsTutorialComponent implements OnInit {
    post$!: Observable<Post[]>;

    combineData$!: Observable<{userById: any[]; postsByUser: Post[];}[]>;

    userWithPosts$!: Observable<{user: any[]; posts: Post[];}>;



    constructor(
        private postService: PostService
    ) { }



    ngOnInit(): void {
        //Get all posts
        //this.postService.getListPosts().subscribe(rs => console.log(rs));

        //Get postsById
        //this.postService.getPostsByUserId(1).subscribe(rs => console.log(rs));

        //Get userById
        //this.postService.getUserById().subscribe(rs => console.log(rs));

        //combine user and posts
        this.combineData$ = this.postService.combineUserPosts(5);

        //Making parallel requests
        this.userWithPosts$ = this.postService.joinData(2);

    }

}
