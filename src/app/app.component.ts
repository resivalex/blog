import { Component } from '@angular/core';
import { NoteStorageService } from './note-storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NoteStorageService]
})
export class AppComponent {
}
