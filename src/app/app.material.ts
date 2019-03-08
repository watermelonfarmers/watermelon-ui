import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatFormFieldModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule
    ],
})
export class MaterialModule { }