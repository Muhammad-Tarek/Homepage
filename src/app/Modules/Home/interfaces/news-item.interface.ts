export interface INewsItem {
  id: string;
  categoryID: string;
  category?: string;
  title: string;
  description: string;
  publishedDate: string;
  content: string;
  urlToImage: string;
  showOnHomepage: string;
  isFavorite?: boolean;
}
