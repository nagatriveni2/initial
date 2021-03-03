import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [{path:'Session',component:SessionsComponent},
{path:'',component:ContentComponent},
{path:'home',component:ContentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
