import { Component } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Team } from '../team';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  game:Game;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.createGame();
  }

  private createGame(){
    this.gameService.createGame().subscribe(data => {
    this.game= data;
    console.log(data.team_a);
    });
  }

}
