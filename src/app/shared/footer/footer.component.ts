import { Component, OnInit } from '@angular/core';
import { BioService } from '../../services/bio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  anio: number = new Date().getFullYear();
  constructor( public bioService: BioService ) { }

  ngOnInit() {
  }

}
