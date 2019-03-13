import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule, 
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatSnackBarModule
    ],
  exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatSnackBarModule
    ],
})
export class MaterialModule { }