import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

interface LoadingData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-loading-snackbar',
  standalone: true,
  template: `
    <div class="loading-content" role="status">
      <span class="spinner" aria-hidden="true"></span>

      <div>
        <strong>{{ data.title }}</strong>
        <div>{{ data.message }}</div>
      </div>
    </div>
  `,
  styles: [`
    .loading-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 3px solid #dbeafe;
      border-top-color: #2563eb;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      flex-shrink: 0;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner { animation: none; }
    }
  `]
})
export class LoadingSnackbarComponent {
  readonly data = inject<LoadingData>(MAT_SNACK_BAR_DATA);
}