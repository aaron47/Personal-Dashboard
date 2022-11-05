import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationData } from './notification-data.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notification$: Subject<NotificationData> = new Subject();

  constructor() {}

  get getNotifications() {
    return this.notification$.asObservable();
  }

  show(text: string, duration: number = 5000) {
    this.notification$.next({ text, duration });
  }
}
