import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search/:name', component: SearchResultComponent},
  {path: 'details',   component: TrackDetailsComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
