import { Injectable, inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar
} from '@angular/material/snack-bar';

import { NotificationRef, NotificationRequest } from './notification.model';
import { LoadingSnackbarComponent } from './loading-snackbar.component';

@Injectable({ providedIn: 'root' })
export class ToastAdapterService {
  private readonly snackBar = inject(MatSnackBar);

  show(request: NotificationRequest): NotificationRef {
    const {
      type,
      title,
      message,
      duration,
      persistent = false
    } = request;

    if (type === 'loading') {
      const ref = this.snackBar.openFromComponent(
        LoadingSnackbarComponent,
        {
          data: { title: title || 'Loading', message },
          duration: 0,
          panelClass: ['notification-loading'],
          horizontalPosition: 'end',
          verticalPosition: 'top'
        }
      );

      /* The return stops execution of the method after creating the loading snackbar. 
      Otherwise, execution would continue into the regular snackbar code, 
      potentially opening another snackbar */
      return { dismiss: () => ref.dismiss() };
    }

    const ref: MatSnackBarRef<TextOnlySnackBar> =
      this.snackBar.open(
        title ? `${title}: ${message}` : message,
        'X',
        {
          duration: persistent ? 0 : duration ?? (
            type === 'error' ? 6000 : 4000
          ),
          panelClass: [`notification-${type}`],
          horizontalPosition: 'end',
          verticalPosition: 'top'
        }
      );

    return { dismiss: () => ref.dismiss() };
  }
}