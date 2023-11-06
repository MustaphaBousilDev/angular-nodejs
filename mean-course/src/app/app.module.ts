import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material design
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,  //BrowserAnimationsModule is required for Angular Material its for animations
    MatInputModule,  //MatInputModule is required for Angular Material its for input  fields 
    MatCardModule , //MatCardModule is required for Angular Material its for card  fields
    MatButtonModule //MatButtonModule is required for Angular Material its for button  fields
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
