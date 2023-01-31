import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleSwitcherComponent } from './components/header/style-switcher/style-switcher.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { TaskApiService } from './service/task-api.service';

@NgModule({
  declarations: [
    StyleSwitcherComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    HeaderComponent
  ],
  providers: [
    ApiService,
    TaskApiService
  ]
})
export class CoreModule { }
