import { Component, OnInit } from '@angular/core';
import {AnimalsProvider} from './animals.provider';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  public animals;
  public minLegs = 0;
  public maxLegs = 8;

  constructor(private provider: AnimalsProvider) {}

  ngOnInit() {
    this.provider.getAnimals().subscribe(
      (data) => {
        console.log('Success!');
        console.log(data);
        this.animals = data;
      },
      error => console.log('Error occured: ' + error)
    );
  }


}
