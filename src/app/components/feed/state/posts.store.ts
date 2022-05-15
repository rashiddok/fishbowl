import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { IFeedPost } from '../../../shared/models/IFeedPost';
import { ApiService } from '../../../shared/api.service';
import IMetaCard from '../../../shared/models/IMetaCard';

@Injectable()
export class PostsStore {
  postsData: BehaviorSubject<IFeedPost[]> = new BehaviorSubject<IFeedPost[]>(
    []
  );
  metaData: BehaviorSubject<IMetaCard[]> = new BehaviorSubject<IMetaCard[]>([]);
  constructor(private apiService: ApiService) {}

  fetchInitialData(start: number = 0, count: number = 10) {
    //TODO: ADD ERROR HANDLER
    combineLatest([
      this.apiService.fetchPosts(start, count),
      this.apiService.fetchMeta(),
    ]).subscribe(([posts, meta]) => {
      this.postsData.next([...this.postsData.getValue(), ...posts]);
      this.metaData.next([...this.metaData.getValue(), ...meta]);
    });
  }

  fetchPosts(start: number = 0, count: number = 10) {
    this.apiService.fetchPosts(start, count).subscribe((posts) => {
      this.postsData.next([...this.postsData.getValue(), ...posts]);
    });
  }
}
