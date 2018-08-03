import { Component, OnInit } from '@angular/core';
import { BioService } from '../../services/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public bioService: BioService) { }

  ngOnInit() {
  }

}
