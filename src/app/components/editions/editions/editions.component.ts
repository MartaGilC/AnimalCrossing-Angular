import { ActivatedRoute, Router } from '@angular/router';
import { EditionsService } from './../../../services/editions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.scss']
})
export class EditionsComponent implements OnInit{
  id: any;
  editions:any;
  constructor(private editionService: EditionsService, private activatedRoute: ActivatedRoute, private router: Router){
    this.editionService.getAllEditions().subscribe((data: any) => {
      this.editions = [...data];
    })
  }
  
  
  ngOnInit(): void {
    
  }
}
