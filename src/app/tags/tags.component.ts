import { Component, Input, OnInit } from '@angular/core';
import { FetilizersService } from '../services/Fetilizers/fetilizers.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  fetilizersPageTags?:string[];

  @Input()
  justifyContent:string='center';

  tags?:Tag[];
  constructor(private fetilizersService:FetilizersService) { }

  ngOnInit(): void {
    if(!this.fetilizersPageTags)
    this.tags=this.fetilizersService.getAllTags();

  }

}
