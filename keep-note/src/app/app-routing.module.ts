import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'note-view',
    component: NoteViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/note-view',
    pathMatch: 'full',
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'add-note',
    component: AddNoteComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
