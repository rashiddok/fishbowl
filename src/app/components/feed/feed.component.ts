import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, mergeMap, Observable, scan } from 'rxjs';
import { IFeedPost } from '../../shared/models/IFeedPost';
import { PostsStore } from './state/posts.store';
import IMetaCard from '../../shared/models/IMetaCard';

@Component({
  selector: 'app-feed',
  styleUrls: ['feed.component.scss'],
  template: ` <div class="feed" appScrolledBottom (scrolled)="onScroll()">
    <ng-container
      *ngFor="let post of posts | async; trackBy: trackByFunc; let i = index"
    >
      <ng-container *ngIf="isMetaInArray(i) | async as metaCard">
        <app-meta [meta]="metaCard"></app-meta>
      </ng-container>
      <app-post [postData]="post"></app-post>
    </ng-container>
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

  trackByFunc(_index: number, item: IFeedPost) {
    return item._id;
  }

  isMetaInArray(index: number): Observable<IMetaCard> {
    return this.meta.pipe(
      mergeMap((data) => data),
      filter((data) => data.position === index),
      scan((acc, data) => {
        if (acc === undefined || acc.position >= data?.position) {
          return data;
        }
        return acc;
      })
    );
  }

  fetchPosts() {
    this.postsStore.fetchPosts(this.currentPage, this.fetchCount);
  }
}
