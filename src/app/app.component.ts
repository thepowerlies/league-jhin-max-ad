import { Component } from '@angular/core';
import {ITEMS} from './data/items';
import {Item} from './data/item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  attackDamage = 59;
  attackPerLevel = 4.7;
  level = 1;
  infernal = 0;
  levels = [];
  excellence = null; // absolute focus 1.8 to 18  -- Transcendence 1.2 for every 1%
  items = ITEMS;
  gatheringStorm = false;
  gatheringValues = [5, 14, 29, 48, 72, 101];
  gatheringValue;
  alacrity = false; // 18% max
  eyeball = false;

  constructor(){
    for(let i=0;i<18; i++)
      this.levels.push(i+1);

    this.gatheringValue = this.gatheringValues[0];
  }

  find(){
    let max = this.items.length - 1;

    let indexes = [0, 1, 2, 3, 4, 5];
    let working = true;
    let count = 0;
    let maxIndexes = null;
    let maxValue = 0;

    while(working){
      let items = [];
      indexes.forEach( i => {
        items.push(this.items[i])
      });
      let val = this.calculate(...items);
      if(val > maxValue){
        maxValue = val;
        maxIndexes = Array.from(indexes);
      }

      if(indexes[0] === max-5 && indexes[5] === max){
        working= false;
        break;
      }

      for(let i=5;i>=0;i--){
        if(indexes[i] != max-5+i){
          indexes[i] = indexes[i] + 1;
          break;
        }
      }



    }
    console.log(count);
    console.log(indexes);



  }

  calculate(...items: Item[]): number{
    let ad = 0;
    let as = 0;
    let crit = 0;
    let cdr = 0;

    items.forEach(i => {
      ad+= i.damage;
      as+= i.speed;
      crit+= i.critical;
      cdr+= i.cdr;
    });


    return 1;
  }


  getBaseAd(){
    return this.attackDamage + ((this.level-1) * this.attackPerLevel);
  }



}


