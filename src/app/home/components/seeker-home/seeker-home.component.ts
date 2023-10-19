import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from 'src/app/notification/components/notification/notification.component';

@Component({
  selector: 'app-seeker-home',
  templateUrl: './seeker-home.component.html',
  styleUrls: ['./seeker-home.component.css']
})
export class SeekerHomeComponent {
  constructor(private dialog: MatDialog) {}

  showNotifications() {
    console.log('Mostrar notificaciones');
    this.dialog.open(NotificationComponent);
  }
}
