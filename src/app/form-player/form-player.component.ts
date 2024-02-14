import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { APP_ROUTES } from '../app.routes';
import { ListPlayersComponent } from '../list-players/list-players.component';
@Component({
  selector: 'app-form-player',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,RouterOutlet,ListPlayersComponent],
  templateUrl: './form-player.component.html',
  styleUrl: './form-player.component.css'
})
export class FormPlayerComponent {


  playerForm: FormGroup;

  constructor(private fb: FormBuilder, private playerService: PlayerService, private router:Router) {
    this.playerForm = this.fb.group({
      // Define tus campos del formulario y las validaciones necesarias aquí
      name: ['', Validators.required],
      attack: [0, Validators.required],
      defense: [0, Validators.required],
      goalkeeper: [false, Validators.required],
      speed: [0, Validators.required],
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
