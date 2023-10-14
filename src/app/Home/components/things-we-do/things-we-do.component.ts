import { Component, OnInit } from '@angular/core';
import { ThingsWeDoService } from '../../services/things-we-do.service';

@Component({
  selector: 'app-things-we-do',
  templateUrl: './things-we-do.component.html',
  styleUrls: ['./things-we-do.component.scss'],
})
export class ThingsWeDoComponent implements OnInit {
  public activities: Array<any> = [];

  constructor(private thingsWeDoService: ThingsWeDoService) {}

  ngOnInit() {
    this.getActivities();
  }

  // Get Activities Using Firebase
  getActivities() {
    this.thingsWeDoService.getActivities().subscribe((res) => {
      this.activities = res[0]['activities'];
      console.log(res[0]['activities']);
    });
  }
}
