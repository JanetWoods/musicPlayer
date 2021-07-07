import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {appRoutes} from './routes';
import {ArtistComponent} from './artists/artist';
import { AlbumsComponent } from './albums/albums.component'

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'artists', component: ArtistComponent},
      {path: 'albums', component: AlbumsComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
