import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable, retry } from 'rxjs';
import IMetaCard from './models/IMetaCard';
import { IFeedPost } from './models/IFeedPost';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public fetchPosts(start: number, count: number): Observable<IFeedPost[]> {
    return this.http
      .get<any>(
        `${this.API_URL}/v4/feed/consolidated/posts?count=${count}&start=${start}`
      )
      .pipe(
        map((data) => data.posts),
        retry(2)
      );
  }

  public fetchMeta(): Observable<IMetaCard[]> {
    return this.http
      .get<{ cards: IMetaCard[] }>(`${this.API_URL}/v4/feed/consolidated/meta`)
      .pipe(
        map((data) => data.cards),
        map((data) => data.filter((x) => [0, 2].includes(x.type))),
        retry(2)
      );
  }
}
