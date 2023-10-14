import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ThingsWeDoService {
  constructor(private fs: Firestore) {}

  // Get Activities Using Firebase
  getActivities() {
    let activities = collection(this.fs, 'activities');
    return collectionData(activities, { idField: 'id' });
  }
}
