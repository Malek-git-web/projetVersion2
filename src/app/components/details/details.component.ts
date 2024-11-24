import { Component, inject, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../../model/produit';
import { CommonModule, CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgClass,CurrencyPipe,DatePipe,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
router:Router=inject(Router);
produitService:ProduitsService=inject(ProduitsService);
activatedRoute:ActivatedRoute=inject(ActivatedRoute);
id!:number;
sac!:Produit;

stars:number[]=[1,2,3,4,5];
ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['sac'];
  this.produitService.getProductsById(this.id).subscribe(
    data => {
      this.sac = data;
    },
    error => {
      console.error('Erreur lors de la récupération des détails du produit', error);
      // Afficher un message d'erreur ou une vue alternative
    }
      
    
    
  )

}
onCommender(){
this.router.navigate(['/commande/'+this.id])
}



}
