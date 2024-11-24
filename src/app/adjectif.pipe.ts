import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'adjectif',
  standalone: true
})
export class AdjectifPipe implements PipeTransform {

  
    transform(nom: string, quantite: number, dateDeLancement: Date): string {
      const today = new Date();
      const daysSinceLaunch = Math.floor((today.getTime() - dateDeLancement.getTime()) / (1000 * 60 * 60 * 24));
  
      let label = '';
  
      // Ajouter un indicateur en fonction des critères
      if (quantite <= 5) {
        label = ' (Quantité Limitée)';
      } else if (daysSinceLaunch <= 30) {
        label = ' (Nouveau)';
      } else if (quantite > 10) {
        label = ' (Populaire)';
      }
  
      // Retourner le nom formaté
      return `${nom}${label}`;
    }

}
//mezelt m staamaltouch khtr ki nhotou f detail bahtha sac.nom tsir mochkla so taw dmn nchalh bisoux
