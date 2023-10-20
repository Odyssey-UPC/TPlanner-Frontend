import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  selectedNotification: Notification | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notifications = this.notificationService.getAllNotifications();
  }

  onNotificationClick(notification: Notification) {
    this.selectedNotification = notification;
  }
}