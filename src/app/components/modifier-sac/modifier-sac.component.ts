import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProduitsService } from '../../services/produits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../../model/produit';
import { Avis } from '../../model/avis';

@Component({
  selector: 'app-modifier-sac',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modifier-sac.component.html',
  styleUrl: './modifier-sac.component.css'
})
export class ModifierSacComponent implements OnInit {
  router:Router=inject(Router);
  fb:FormBuilder=inject(FormBuilder);
   productForm!:FormGroup;
   activatedRoute:ActivatedRoute=inject(ActivatedRoute);
   id!:number;
   sac!:Produit;
   productService:ProduitsService=inject(ProduitsService);
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['sac'];
    this.productService.getProductsById(this.id).subscribe(
  data=>{this.sac=data  
    console.log(this.sac)
    
     this.productForm=this.fb.group({
      id:[this.sac.id],
      nom: [this.sac.nom,Validators.required],
      categorie: [this.sac.categorie,Validators.required],
      prix: [this.sac.prix,[Validators.required,Validators.min(10)]],
      description: [this.sac.description,Validators.required],
      detail: [this.sac.detail,Validators.required],
      promotion: [this.sac.promotion,Validators.required],
      dateDeLancement: [this.sac.dateDeLancement,Validators.required],
      enStock: [this.sac.enStock],
      couleur: [this.sac.couleur,Validators.required],
      quantite: [this.sac.quantite,Validators.required],
      marque: [this.sac.marque,Validators.required],
      
    })
  }
    );
    

 
}
avis:Avis[]=[];
p!:Produit;
onSubmit(){
this.avis=this.sac.avis;
  this.p=this.productForm.value;
  this.p.avis=this.avis;
this.onModifier(this.id,this.p);
}
 onModifier(id:number,p:Produit){
  this.productService.patchProduct(id,p).subscribe(
     data=>console.log(data)
   );
}
  get nom(){
    return this.productForm.get('nom');
  }
  get prix(){
    return this.productForm.get('prix');
  }
  onRetour(){
    this.router.navigate(['/controls']);
  }
  onEffacer(){
    this.productForm.reset();
  }
}
