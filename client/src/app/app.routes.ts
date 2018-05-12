import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { GenresComponent } from "./genres/genres.component";

export const routes: Routes = [
    { path: 'genre', component: GenresComponent },
    { path: 'fileupload', component: FileUploadComponent }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);