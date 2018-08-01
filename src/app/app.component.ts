import { Component } from '@angular/core';
import { BioService } from './services/bio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public bioService: BioService){

  }



  
}
