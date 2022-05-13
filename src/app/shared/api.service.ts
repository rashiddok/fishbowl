import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable, tap } from 'rxjs';
import IMetaCard from './models/IMetaCard';
import { IFeedPost } from './models/IFeedPost';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public fetchPosts(count: number, start: number): Observable<IFeedPost[]> {
    return this.http
      .get<any>(
        `${this.API_URL}/v4/feed/consolidated/posts?count=${count}&start=${start}`
      )
      .pipe(
        map((data) => data.posts),
        tap(
          (data) =>
            (data[1].text =
              'Proin at justo vel neque condimentum porttitor. Curabitur id purus massa. Mauris consequat mauris et orci congue rhoncus. Pellentesque dui ex, porta a velit ultrices, vestibulum luctus sapien. Praesent vel commodo ex, placerat euismod erat. Nullam a finibus urna. Curabitur consequat rutrum odio. Cras sit amet vestibulum lectus. Sed tristique porta tellus, id bibendum dolor dapibus ac. Maecenas mattis, dui sed rutrum commodo, purus eros finibus nulla, id sodales sapien sem sit amet libero. Maecenas consequat mi massa. Proin consectetur risus sapien, at aliquam sem porta id. In nec condimentum sapien, sit amet tincidunt felis. Morbi tincidunt blandit quam sed sodales. In hac habitasse platea dictumst.')
        )
      );
  }

  public fetchMeta(): Observable<IMetaCard[]> {
    return this.http
      .get<any>(`${this.API_URL}/v4/feed/consolidated/meta`)
      .pipe(map((data) => data.cards));
  }
}
