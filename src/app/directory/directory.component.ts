import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteStorageService } from '../note-storage.service'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  notes: Array<object>;

  constructor(private route: ActivatedRoute, private noteStorage: NoteStorageService) { 
    this.notes = noteStorage.all();
  }

  ngOnInit() {
  }

}
