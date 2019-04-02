import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSnackBarModule, MatListModule, MatSelectModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule, 
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatSnackBarModule,
      MatListModule,
      MatSelectModule,
      MatDialogModule
    ],
  exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatSnackBarModule,
      MatListModule,
      MatSelectModule,
      MatDialogModule
    ],
})
export class MaterialModule { }