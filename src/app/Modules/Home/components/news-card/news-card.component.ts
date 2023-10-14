import { Component, Input, OnInit } from '@angular/core';
import { INewsCategory } from '../../interfaces/news-category.interface';
import { INewsItem } from '../../interfaces/news-item.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() item: INewsItem = {} as INewsItem;
  newsCategories: Array<INewsCategory> = [];
  isShare!: boolean;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNewsCategories();
  }

  getNewsCategories() {
    this.newsService.getNewsCategories().subscribe((res: any) => {
      this.newsCategories = res.newsCategory;
      this.getItemCategory();
    });
  }

  getItemCategory() {
    const category = this.newsCategories.find(
      (category) => category.id === +this.item.categoryID
    );
    this.item.category = category?.name;
  }

  toggleAddToFavoriteList(item: INewsItem) {
    item.isFavorite = !item.isFavorite;
  }

  toggleShare() {
    this.isShare = !this.isShare;
  }
}
