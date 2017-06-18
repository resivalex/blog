import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';

export const APP_ROUTES = [
    { path: "notes/:id", component: NoteComponent },
    { path: "notes", component: DirectoryComponent },
    { path: "", component: HomeComponent }
];
