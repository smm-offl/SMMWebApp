import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'Settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
