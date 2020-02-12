import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, BrowserModule,
    BrowserAnimationsModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class FeaturesShellModule {}
