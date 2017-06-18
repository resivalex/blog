import { Component, OnInit, Input } from '@angular/core';
import { NoteStorageService } from '../note-storage.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note:any = {
    title: '', summary: '', text: ''
  };

  constructor(private noteStorage : NoteStorageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.note = this.noteStorage.find(id);
    });
  }

}
