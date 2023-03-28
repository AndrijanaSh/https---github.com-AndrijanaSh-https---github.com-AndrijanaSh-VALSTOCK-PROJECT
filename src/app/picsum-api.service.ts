import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PicsumApiService {
  allPhotos: [] = [];

  constructor(private httpClient: HttpClient) { 
  }

  

  getPhotos(page: number = 1, limit: number = 15) {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

    return this.httpClient.get(url).pipe(
      map(res => res)
    )
  }

  

}
