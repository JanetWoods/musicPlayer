import {ArtistComponent} from './artists/artist';
import { AlbumsComponent } from './albums/albums.component';


export const appRoutes=[
    {path: 'artists', component: ArtistComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'}
];
