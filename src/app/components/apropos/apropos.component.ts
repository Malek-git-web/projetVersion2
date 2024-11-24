import { Component } from '@angular/core';
import { SafePipe } from '../safe.pipe'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [SafePipe], // Ajouter le pipe à la liste des imports
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent {
  // Définition de l'URL de la vidéo Instagram
  videoUrl: string = 'https://www.youtube.com/watch?v=BkzyjNY5fNw';
}
