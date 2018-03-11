import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeesModule} from "./employees/employees.module";
import { AppComponent } from './app.component';
import { MyNewPipePipe } from './my-new-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyNewPipePipe
  ],
  imports: [
    BrowserModule,
    EmployeesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
