import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NOTE_STORAGE_TOKEN } from '../../note-storage-token'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  notes: Array<object>;

  constructor(private route: ActivatedRoute, @Inject(NOTE_STORAGE_TOKEN) private noteStorage) {
    this.notes = noteStorage.all();
  }

  ngOnInit() {
  }

}
