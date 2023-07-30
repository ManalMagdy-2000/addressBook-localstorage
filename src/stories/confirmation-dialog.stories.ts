import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

export default {
  title: 'Dialog/Confirmation',
  decorators: [
    moduleMetadata({
      declarations: [ConfirmationDialogComponent],
      imports: [MatDialogModule, MatButtonModule, BrowserAnimationsModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { message: 'Are you sure?' } }],
    }),
  ],
};

export const Default = () => ({
  template: `
    <app-confirmation-dialog></app-confirmation-dialog>
  `,
});
