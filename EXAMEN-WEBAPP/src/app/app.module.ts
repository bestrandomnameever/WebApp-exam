import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AddMangaModule } from './add-manga/add-manga.module';

import { AppComponent } from './app.component';
import { 
  SharedModule,
  MainNavComponent
} from './shared';


const rootRouting = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    AddMangaModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpModule,
    rootRouting,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
