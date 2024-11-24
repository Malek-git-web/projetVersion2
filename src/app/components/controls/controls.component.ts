import { Component, inject, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { Produit } from '../../model/produit';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FilsComponent } from "../fils/fils.component";

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent implements OnInit {
  router:Router=inject(Router);
  mdp!:string;
  sacs:Produit[]=[];
private readonly produitService:ProduitsService=inject(ProduitsService);
ngOnInit(): void {
  this.mdp=this.produitService.getMotDePasse();
  this.produitService.getProducts().subscribe(
    data=>this.sacs=data
  )
}



onDeleteSac(id:number){
  
    this.produitService.deleteProduct(id).subscribe( data=>
      this.sacs=this.sacs.filter((elt)=>elt.id!==id)
    );
    
  }

//partie mot de passe

 

changeMdp(nvMdp:any){
 this.produitService.updateMdp(nvMdp.value);
 alert('le mot de passe est bien changer !!!')

}
//CRUD routes
onAddSac(){
  this.router.navigate(['/ajouter-sac']);
}
onModifSac(id:number){
  this.router.navigate(['/modifier-sac/'+id]);
}
onSuppSac(){
  this.router.navigate(['/supprimer-sac']);
}

onConsultSac(){
  this.router.navigate(['/consulter-sac']);
}
onCommandes(){
  this.router.navigate(['/commandes']);
}
}
