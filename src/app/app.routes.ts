import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES = [
    { path: "notes", component: DirectoryComponent },
    { path: "", component: HomeComponent }
];
