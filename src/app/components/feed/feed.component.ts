import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, find, mergeMap, Observable } from 'rxjs';
import { IFeedPost } from '../../shared/models/IFeedPost';
import { PostsStore } from './state/posts.store';
import IMetaCard from '../../shared/models/IMetaCard';

@Component({
  selector: 'app-feed',
  styleUrls: ['feed.component.scss'],
  template: ` <div class="feed">
    <infinite-scroll (scrolled)="onScroll()">
      <ng-container *ngFor="let post of posts | async; let i = index">
        <ng-container *ngIf="isMetaInArray(i) | async as metaCard">
          <app-meta [meta]="metaCard"></app-meta>
        </ng-container>
        <app-post [postData]="post"></app-post>
      </ng-container>
    </infinite-scroll>
  </div>`,
})
export class FeedComponent implements OnInit {
  private readonly _posts!: BehaviorSubject<IFeedPost[]>;
  posts!: Observable<IFeedPost[]>;
  meta: Observable<IMetaCard[]>;
  private fetchCount: number = 10;
  private currentPage: number = 0;
  constructor(private postsStore: PostsStore) {
    this._posts = this.postsStore.postsData;
    this.posts = this._posts.asObservable();
    this.meta = this.postsStore.metaData.asObservable();
  }

  onScroll() {
    this.currentPage++;
    this.fetchPosts();
  }
  ngOnInit() {
    this.postsStore.fetchInitialData();
  }

  isMetaInArray(index: number): Observable<IMetaCard | undefined> {
    return this.meta.pipe(
      mergeMap((data) => data),
      find((data) => {
        return data.position === index;
      })
    );
  }

  fetchPosts() {
    console.log(`fetching: page ${this.currentPage} count: ${this.fetchCount}`);
    this.postsStore.fetchPosts(this.currentPage, this.fetchCount);
  }
}
