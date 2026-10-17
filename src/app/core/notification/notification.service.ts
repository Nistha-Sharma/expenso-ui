import { Injectable, inject } from '@angular/core';
import { ToastAdapterService } from './toast-adapter.service';
import { NotificationRef, NotificationRequest, NotificationType, NotificationOptions } from './notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly adapter = inject(ToastAdapterService);

  success(message: string, options?: NotificationOptions) {
    return this.show('success', message, options);
  }

  error(message: string, options?: NotificationOptions) {
    return this.show('error', message, options);
  }

  warning(message: string, options?: NotificationOptions) {
    return this.show('warning', message, options);
  }

  info(message: string, options?: NotificationOptions) {
    return this.show('info', message, options);
  }

  loading(message: string, title = 'Loading') {
    return this.show('loading', message, {
      title,
      persistent: true
    });
  }

  private show(
    type: NotificationType,
    message: string,
    options: NotificationOptions = {}
  ): NotificationRef {
    if (!message?.trim()) {
      throw new Error(
        'Notification message cannot be empty.'
      );
    }

    const request: NotificationRequest = {
      ...options,
      type,
      message: message.trim()
    };

    return this.adapter.show(request);
  }
}