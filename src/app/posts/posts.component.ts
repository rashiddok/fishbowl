import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';
import { IFeedPost } from '../shared/models/IFeedPost';
import { PostsStore } from './state/posts.store';

@Component({
  selector: 'app-feed',
  styleUrls: ['posts.component.scss'],
  template: ` <div class="feed">
    <infinite-scroll (scrolled)="onScroll()">
      <ng-container *ngFor="let post of posts | async">
        <app-post [postData]="post"></app-post>
      </ng-container>
    </infinite-scroll>
  </div>`,
})
export class PostsComponent implements OnInit {
  posts!: Observable<IFeedPost[]>;
  private fetchCount: number = 10;
  private currentPage: number = 0;
  constructor(private postsStore: PostsStore) {
    this.posts = this.postsStore.postsData.asObservable();
  }

  onScroll() {
    this.currentPage++;
    this.fetchPosts();
  }
  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    console.log(`fetching: page ${this.currentPage} count: ${this.fetchCount}`);
    this.postsStore.fetchPosts(this.currentPage, this.fetchCount);
  }
}
