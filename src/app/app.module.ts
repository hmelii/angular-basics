import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component'
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ServiceComponent } from './components/service/service.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfnotDirective,
    PipesComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    ServiceComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

