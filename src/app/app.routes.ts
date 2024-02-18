import { Routes } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { FormPlayerComponent } from './form-player/form-player.component';
import { ActivePlayersListComponent } from './active-players-list/active-players-list.component';
import { GameComponent } from './game/game.component';

export const APP_ROUTES: Routes = [
    { path: 'new-player', component: FormPlayerComponent },
    { path: '', redirectTo: '' , pathMatch: "full" },
    { path: 'list-player', component: ListPlayersComponent},
    { path: 'active-players', component: ActivePlayersListComponent},
    { path: 'new-game', component: GameComponent}, 
  ];
