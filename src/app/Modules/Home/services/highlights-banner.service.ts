import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HighlightsBannerService {
  constructor(private http: HttpClient) {}

  getBanners() {
    return this.http.get('./assets/json/banner.json');
  }
}
