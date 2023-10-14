import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ThingsWeDoComponent } from './components/things-we-do/things-we-do.component';

@NgModule({
  declarations: [HomeComponent, ThingsWeDoComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
