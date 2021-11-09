import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/tag';
import {Fertilizer} from '../../shared/models/fetilizer';

@Injectable({
  providedIn: 'root'
})
export class FetilizersService {

  constructor() { }
 
  getFetilizersById(id: number): Fertilizer{
    return this.getAll().find(fetilizer => fetilizer.id == id)!;

  }
  getAllFetilizersBySearchTerm(searchTerm:string) :Fertilizer[]{
    return  this.getAll().filter(Fertilizer=>
      Fertilizer.name.toLowerCase().includes(searchTerm.toLowerCase()));
      
  }
  
    getAllTags(): Tag[] {
    return [
      { name: 'All', count: 3 },
      { name: 'Metal', count: 2 },
      { name: 'Liquid', count: 1 }
    ];
  }
  getAllFetilizersByTag(tag: string): Fertilizer[] {
    
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(Fertilizer => Fertilizer.tags?.includes(tag));
  }
 
  getAll():Fertilizer[]{

    return[
      {
        id: 1,
        name: 'DAP',
        cookTime: '50 left',
        price: 10,
        favorite: false,
        origins: ['india'],
        stars: 4.5,
        imageUrl: '/assets/imgages/Fertilizers/1.jpg',
        tags: ['Metal'],
      },
      {
        id: 2,
        name: 'MISHAL',
        price: 20,
        cookTime: '46 left',
        favorite: true,
        origins: ['india', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/imgages/Fertilizers/2.jpg',
        tags: ['Liquid']
      },
      {
        id: 3,
        name: 'NPM',
        price: 5,
        cookTime: '70 left',
        favorite: false,
        origins: ['india', 'us'],
        stars: 3.5,
        imageUrl: '/assets/imgages/Fertilizers/3.jpg',
        tags: ['Metal']
      }
    ]
  }
}
