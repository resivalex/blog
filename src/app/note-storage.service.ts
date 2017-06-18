import { Injectable } from '@angular/core';

@Injectable()
export class NoteStorageService {

  constructor() { }

  all(): Array<object> {
    return [
      {
        title: "First note",
        summary: "test"
      },
      {
        title: "Second note",
        summary: "test2"
      },
      {
        title: "Yet another note",
        summary: "Summary.."
      }
    ];
  }


}
