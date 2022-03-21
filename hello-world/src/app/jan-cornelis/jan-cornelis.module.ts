import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JanCornelisComponent } from './jan-cornelis.component';
import { FormsModule } from '@angular/forms';
import { CarroufService } from '../services/carrouf.service';

@NgModule({
  declarations: [JanCornelisComponent],
  imports: [CommonModule, FormsModule],
  providers: [CarroufService],
  exports: [JanCornelisComponent],
})
export class JanCornelisModule {}
