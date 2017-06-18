import { Injectable } from '@angular/core';

@Injectable()
export class NoteStorageService {

  data = [
    {
      title: 'Phone number placeholder',
      summary: 'Working example',
      text: "..."
    },
    {
      title: 'Second note',
      summary: 'test2',
      text: '<h1>Absent</h1>'
    },
    {
      title: 'Yet another note',
      summary: 'Summary..',
      text: '<h1>Absent too</h1>'
    }
  ];

  constructor() { }

  all(): Array<object> {
    return this.data;
  }

  find(id: number): object {
    if (!(id >= 0 && id < this.data.length)) return { title: '', summary: '', text: '' }
    return this.data[id];
  }

}
