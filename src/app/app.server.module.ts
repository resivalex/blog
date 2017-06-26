import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { NoteStorageService } from './note-storage.server.service';
import { NOTE_STORAGE_TOKEN } from '../note-storage-token'

@NgModule({
  imports: [
    ServerModule,
    AppModule
  ],
  providers: [NoteStorageService, { provide: NOTE_STORAGE_TOKEN, useExisting: NoteStorageService }],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
