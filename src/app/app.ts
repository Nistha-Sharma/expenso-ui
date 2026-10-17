import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from './core/notification/notification.service';
import { NotificationType } from './core/notification/notification.model';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly notification = inject(NotificationService);

  protected readonly title = signal('Expenso');

showNotification(type: NotificationType): void {
  switch (type) {
    case 'success':
      this.notification.success('Save successful.', {
        title: 'Success'
      });
      break;

    case 'error':
      this.notification.error('Something went wrong.', {
        title: 'Error'
      });
      break;

    case 'warning':
      this.notification.warning('Please check your input.', {
        title: 'Warning'
      });
      break;

    case 'info':
      this.notification.info('Here is some information.', {
        title: 'Info'
      });
      break;

    case 'loading':
      this.notification.loading('Loading...');
      break;

    default:
      console.warn(`Unsupported notification type: ${type}`);
  }
}
}
