import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GenresComponent } from './genres/genres.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { appRouting } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    GenresComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
