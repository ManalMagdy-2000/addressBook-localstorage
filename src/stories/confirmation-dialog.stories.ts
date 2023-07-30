import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { InjectionToken } from '@angular/core';

// Mock implementation for MAT_DIALOG_DATA
const MAT_DIALOG_DATA_MOCK = new InjectionToken<any>('MAT_DIALOG_DATA_MOCK');

export default {
  title: 'Dialog/Confirmation',
  component: ConfirmationDialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [ConfirmationDialogComponent],
      imports: [MatDialogModule, MatButtonModule, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: MAT_DIALOG_DATA_MOCK },
        { provide: MAT_DIALOG_DATA_MOCK, useValue: { message: 'Are you sure?' } },
      ],
    }),
  ],
  argTypes: {
    message: {
      control: 'text',
    },
  },
};

export const Default = (args: any) => ({
  template: `
    <app-confirmation-dialog [data]="data"></app-confirmation-dialog>
  `,
  props: {
    data: {
      message: args.message || 'Are you sure?', // Use the value from args, or set a default value
    },
  },
});

Default.args = {
  message: 'Custom message here!', // Set a default value for the message control
};
