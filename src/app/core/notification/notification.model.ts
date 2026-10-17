export type NotificationType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'loading';

export interface NotificationOptions {
  title?: string;
  duration?: number;
  persistent?: boolean;
}

export interface NotificationRequest
  extends NotificationOptions {
  type: NotificationType;
  message: string;
}

export interface NotificationRef {
  dismiss: () => void;
}