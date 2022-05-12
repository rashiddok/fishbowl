import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import IMetaCard from './models/IMetaCard';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public fetchPosts(count: number, start: number): Observable<any> {
    return this.http
      .get<any>(
        `${this.API_URL}/v4/feed/consolidated/posts?count=${count}&start=${start}`
      )
      .pipe(map((data) => data.posts));
  }

  public fetchMeta(): Observable<IMetaCard[]> {
    return this.http
      .get<any>(`${this.API_URL}/v4/feed/consolidated/meta`)
      .pipe(map((data) => data.cards));
  }
}
