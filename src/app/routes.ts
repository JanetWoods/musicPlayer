import { Router, RouterLink} from "@angular/router";
import {ArtistComponent} from './artists/artist';


export const appRoutes=[
    {path: 'artists', component: ArtistComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'}
];
