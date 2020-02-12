import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableComponent, AddressFormComponent],
  exports: [TableComponent, AddressFormComponent]
})
export class UiCompassModule {}
