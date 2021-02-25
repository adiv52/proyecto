import { Component, OnInit } from '@angular/core';
import { Llista } from '../../llista/llista';
import { LlistaService } from '../../service/llista.service'
@Component({
  selector: 'app-llistar',
  templateUrl: './llistar.component.html',
  styleUrls: ['./llistar.component.css']
})
export class LlistarComponent implements OnInit {

  constructor( private llistaService: LlistaService ) { }
  llista: Llista[] = [];
  ngOnInit(): void {
    this.llistaService.getLlista().subscribe(
      llits => this.llista = llits,
      );
  }
  
}