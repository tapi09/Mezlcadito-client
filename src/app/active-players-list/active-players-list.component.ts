import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-active-players-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './active-players-list.component.html',
  styleUrl: './active-players-list.component.css'
})
export class ActivePlayersListComponent {
  players: Array<any>;

  constructor(private playerService: PlayerService) { }
  ngOnInit(): void {
    this.getActivePlayer();
  }
  getActivePlayer() {
    this.playerService.getActivePlayerList().subscribe(data => {
      this.players = data;
    });
  }
}
