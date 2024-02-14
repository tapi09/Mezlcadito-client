import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { ListPlayersComponent } from "./list-players/list-players.component";
import { FormPlayerComponent } from "./form-player/form-player.component";
import { PlayerService } from './player.service';
import { ActivePlayersListComponent } from './active-players-list/active-players-list.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ListPlayersComponent, FormPlayerComponent, RouterModule, ActivePlayersListComponent]
})
export class AppComponent {
  title = 'Mezcladito';
}



