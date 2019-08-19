import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search/:name', component: SearchResultComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'details',   component: TrackDetailsComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
