import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNewsCategories();
    this.getNewsList();
  }

  getNewsCategories() {
    this.newsService.getNewsCategories().subscribe((res: any) => {
      console.log(res.newsCategory);
    });
  }

  getNewsList() {
    this.newsService.getNews().subscribe((res: any) => {
      console.log(res.News);
    });
  }
}
