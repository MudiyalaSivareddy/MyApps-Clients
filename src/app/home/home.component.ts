import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetilizersService } from '../services/Fetilizers/fetilizers.service';
import { Fertilizer } from '../shared/models/fetilizer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fetilizers:Fertilizer[]=[];
  constructor(private fetilizersservice:FetilizersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.fetilizers = this.fetilizersservice.getAllFetilizersBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.fetilizers = this.fetilizersservice.getAllFetilizersByTag(params.tag);
      else
        this.fetilizers = this.fetilizersservice.getAll();
    })
    
  }

}
