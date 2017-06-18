import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule } from '@angular/router'
import { APP_ROUTES } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { TagListComponent } from './tag-list/tag-list.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { NoteCardComponent } from './note-card/note-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    TagListComponent,
    NavLinksComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'blog'}),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
