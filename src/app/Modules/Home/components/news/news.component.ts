import { Component, OnInit } from '@angular/core';
import { INewsCategory } from '../../interfaces/news-category.interface';
import { INewsItem } from '../../interfaces/news-item.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsCategories: Array<INewsCategory> = [];
  allNews: Array<INewsItem> = [];
  filteredNews: Array<INewsItem> = [];
  newsToShow: Array<INewsItem> = [];
  initialNumOfNewsToShow: number = 6; // Show only 6 items

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNewsCategories();
    this.getNewsList();
  }

  getNewsCategories() {
    this.newsService.getNewsCategories().subscribe((res: any) => {
      this.newsCategories = res.newsCategory;
      this.newsCategories.unshift({ id: 0, name: 'All', isActive: true });
    });
  }

  getNewsList() {
    this.newsService.getNews().subscribe((res: any) => {
      res.News.map((item: INewsItem) => {
        if (item.showOnHomepage === 'yes') {
          this.allNews.push(item);
        }
      });
      this.filteredNews = [...this.allNews];
      this.newsToShow = [...this.filteredNews].slice(
        0,
        this.initialNumOfNewsToShow
      );
    });
  }

  trackByCategory(index: number, category: any): number {
    return category.id;
  }

  trackByNews(index: number, item: any): string {
    return item.id;
  }

  filterByCategory(category: INewsCategory) {
    this.newsCategories.map((category) => (category.isActive = false));
    category.isActive = true;
    const categoryId = category.id;
    const news = [...this.allNews];
    if (categoryId) {
      this.filteredNews = news.filter(
        (item) => +item.categoryID === categoryId
      );
      this.newsToShow = [...this.filteredNews].slice(
        0,
        this.initialNumOfNewsToShow
      );
    } else {
      this.filteredNews = [...news];
      this.newsToShow = [...this.filteredNews].slice(
        0,
        this.initialNumOfNewsToShow
      );
    }
  }

  viewAllNews() {
    this.newsToShow = [...this.filteredNews];
  }
}
