import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-mail-traitement-tech',
  templateUrl: './liste-mail-traitement-tech.component.html',
  styleUrls: ['./liste-mail-traitement-tech.component.css']
})
export class ListeMailTraitementTechComponent implements OnInit {
  allt2:any
  pageSize=5
  page=0
  collectionSize:number
  key:string=""
  constructor(
    private traitementService:TraitementService
  ) { }

  ngOnInit(): void {
    this.getAlltraitementTech();
  }

  getAlltraitementTech(){
    this.traitementService.listTR2().subscribe(res=>{
     this.allt2=res 
 })
}

}