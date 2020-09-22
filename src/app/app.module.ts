import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
