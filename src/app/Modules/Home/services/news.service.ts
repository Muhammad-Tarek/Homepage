import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNewsCategories() {
    return this.http.get('./assets/json/news_category-listing.json');
  }

  getNews() {
    return this.http.get('./assets/json/news_listing.json');
  }
}
