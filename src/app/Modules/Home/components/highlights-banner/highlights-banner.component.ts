import { Component, OnInit } from '@angular/core';
import { IBanner } from '../../interfaces/banner.interface';
import { HighlightsBannerService } from '../../services/highlights-banner.service';

@Component({
  selector: 'app-highlights-banner',
  templateUrl: './highlights-banner.component.html',
  styleUrls: ['./highlights-banner.component.scss'],
})
export class HighlightsBannerComponent implements OnInit {
  banners: Array<IBanner> = [];
  currentBanner: number = 0;
  currentBannerColorCode: string = '';
  currentBannerImgUrl: string = '';

  constructor(private highlightsBannerService: HighlightsBannerService) {}

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners() {
    this.highlightsBannerService.getBanners().subscribe((res: any) => {
      this.banners = res.slides;
      // sort banners by order
      this.banners.sort((a: any, b: any): any => a.order - b.order);
      // initial values for color code and image url
      this.currentBannerColorCode = this.banners[0].colorCode;
      this.currentBannerImgUrl = this.banners[0].imgUrl;
    });
  }

  trackByBanner(index: number, banner: IBanner): number {
    return banner.id;
  }

  navigate(banner: IBanner) {
    const bannerId = banner.id;
    if (bannerId === this.currentBanner) return;
    this.currentBanner = bannerId;
    this.currentBannerColorCode = banner.colorCode;
    this.currentBannerImgUrl = '';
    setTimeout(() => {
      this.currentBannerImgUrl = banner.imgUrl;
    }, 100);
  }
}
