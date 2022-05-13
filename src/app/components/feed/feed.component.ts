import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Observable } from 'rxjs';
import { IFeedPost } from '../../shared/models/IFeedPost';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  posts: Observable<IFeedPost[]> = new Observable<IFeedPost[]>();
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.fetchMeta().subscribe((response) => {
      console.log(response);
    });
    this.apiService.fetchPosts(10, 0).subscribe((response) => {
      console.log(response);
    });
    this.posts = this.apiService.fetchPosts(10, 0);
  }
}
