import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ListPlayersComponent } from '../list-players/list-players.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-player',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,RouterOutlet,ListPlayersComponent, CommonModule],
  templateUrl: './form-player.component.html',
  styleUrl: './form-player.component.css'
})
export class FormPlayerComponent {


  playerForm: FormGroup;

  constructor(private fb: FormBuilder, private playerService: PlayerService, private router:Router) {
    this.playerForm = this.fb.group({
      // Define tus campos del formulario y las validaciones necesarias aquí
      name: ['', Validators.required],
      attack: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      defense: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      speed: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      goalkeeper: [false, Validators.required], 
    });
  }
  onSubmit(): void {
    if (this.playerForm.valid) {
      const formData = this.playerForm.value;
      // Llama al servicio para crear un nuevo jugador
      this.playerService.createPlayer(formData).subscribe(
        () => {
          // Operación exitosa, puedes realizar acciones adicionales si es necesario
          this.playerService.notifyPlayerListUpdated();
          this.router.navigate(['list-player'])
        },
        (error) => {
          console.error('Error during player creation:', error);
          // Manejar el error si la solicitud falla
        }
      );
    }
  }

}
