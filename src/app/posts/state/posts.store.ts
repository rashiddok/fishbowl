import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFeedPost } from '../../shared/models/IFeedPost';
import { ApiService } from '../../shared/api.service';

@Injectable({ providedIn: 'root' })
export class PostsStore {
  postsData: BehaviorSubject<IFeedPost[]> = new BehaviorSubject<IFeedPost[]>(
    []
  );
  constructor(private apiSerivce: ApiService) {}

  fetchPosts(start: number = 0, count: number = 10) {
    //TODO: ADD ERROR HANDLER
    this.apiSerivce.fetchPosts(start, count).subscribe((data) => {
      this.postsData.next([...this.postsData.getValue(), ...data]);
    });
  }
}
