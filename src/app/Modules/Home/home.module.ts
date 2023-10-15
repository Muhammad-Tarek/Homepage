import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ThingsWeDoComponent } from './components/things-we-do/things-we-do.component';
import { NewsComponent } from './components/news/news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { HighlightsBannerComponent } from './components/highlights-banner/highlights-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    ThingsWeDoComponent,
    NewsComponent,
    NewsCardComponent,
    HighlightsBannerComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
