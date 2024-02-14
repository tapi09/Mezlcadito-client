import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../player.service';
import { Subscription } from 'rxjs';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-list-players',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './list-players.component.html',
  styleUrl: './list-players.component.css'
})
export class ListPlayersComponent implements OnInit {

  showList: Boolean;

  player: Player;

  players: Array<any>;

  private playerListSubscription: Subscription;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayerList();
    this.subscribeToPlayerListChanges();
    this.showList = true;
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar posibles pérdidas de memoria
    this.playerListSubscription.unsubscribe();
  }

  switch(id: any): void {
    this.switchPlayer(id);
  }
  delete(id: any): void {
    this.deletePlayerById(id);
  }
  show(): void{
    this.showList = false;
  }
  

  private getPlayerList() {
    this.playerService.getPlayerList().subscribe(data => {
      this.players = data;
    });
  }

  private switchPlayer(id: number) {
    this.playerService.switch(id).subscribe(
      () => {
        // Operación exitosa, notificar y actualizar la lista
        this.playerService.notifyPlayerListUpdated();
      },
      (error) => {
        console.error('Error during switch:', error);
        // Manejar el error si la solicitud falla
      }
    );
  }
  private deletePlayerById(id: number){
    this.playerService.delete(id).subscribe(
      () => {
        // Operación exitosa, notificar y actualizar la lista
        this.playerService.notifyPlayerListUpdated();
      },
      (error) => {
        console.error('Error during switch:', error);
        // Manejar el error si la solicitud falla
      }
    );

  }
  private subscribeToPlayerListChanges(): void {
    // Suscribirse al Subject para detectar cambios
    this.playerListSubscription = this.playerService.getPlayerListUpdated().subscribe(() => {
      // Actualizar la lista cuando se notifique un cambio
      this.getPlayerList();
    });
  }
}


