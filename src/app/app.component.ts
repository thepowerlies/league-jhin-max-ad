import { Component } from '@angular/core';
import {ITEMS} from './data/items';
import {Item} from './data/item.interface';
import {COMB} from "./data/combinations";
import {COMB_UNIQUE} from './data/combinations-unique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  attackDamage = 59;
  attackPerLevel = 4.7;
  attackSpeedPerLevel = 2.2;
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
  lethalTempo = false;
  hailOfBlades = false;

  list: Array<{items: Item[], ad: number}> = [];

  combinations = COMB;

  runeOffense = "ad";
  runeFlex = "ad";

  uniqueItems = false;

  constructor(){
    for(let i=0;i<18; i++)
      this.levels.push(i+1);

    this.gatheringValue = this.gatheringValues[0];
  }

  find(){
    this.list = [];
    this.combinations = this.uniqueItems ? COMB_UNIQUE : COMB;

   this.combinations.forEach( combination => {
     let items = [];
     combination.forEach( i => {
       items.push(this.items[i])
     });
     let val = this.calculate(...items);
     this.list.push({items: items, ad: val});

   });




    this.list = this.list.sort((a, b) => b.ad - a.ad);



  }

  calculate(...items: Item[]): number{
    let ad = this.getBaseAd();
    console.log(this.getBaseAd());
    let as = this.getBonusAS();
    let crit = 0;
    let cdr = 0;

    items.forEach(i => {
      ad+= i.damage;
      as+= i.speed;
      crit+= i.critical;
      cdr+= i.cdr;
    });


    switch (this.runeOffense) {
      case "ad":
        ad+= 5.4;
        break;
      case "as":
        as+= 10;
        break;
      case "cdr":
        cdr+= this.level > 10 ? 10 : this.level;
        break;
    }
    if(this.runeFlex === "ad"){
      ad+=5.4;
    }
    if(this.excellence === "Transcendence"){
      cdr+=10;
      if(cdr > 40){
        ad += (cdr- 40) * 1.2;
      }
    } else if(this.excellence === "Absolute Focus") {
      ad += this.getAbsoluteFocus()
    }
    if(this.gatheringStorm){
      ad+= this.gatheringValue;
    }

    if(this.alacrity){
      as+= 18;
    }
    if(this.eyeball){
      ad+= 18;
    }
    if(this.hailOfBlades){
      as+= 110;
    }
    if(this.lethalTempo){
      as+= 35.882 + 4.118 * this.level;
    }
    if(crit > 100){
      crit = 100;
    }

    let percentage = this.passiveScaling[this.level-1];

    percentage += crit* 0.4;
    percentage += 0.25 * as;

    if(this.infernal){
      ad = ad * (1+(this.infernal/10));
    }

    return ad + (ad/100*percentage);
  }


  getBaseAd(){
    return this.attackDamage + ((this.level-1) * this.attackPerLevel);
  }

  passiveScaling = [4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44];

  getAbsoluteFocus(){
    console.log(0.847 + 0.953 * this.level);
    return 0.847 + 0.953 * this.level
  }

  getBonusAS(): number{
    return parseFloat((this.attackSpeedPerLevel * ( this.level-1)).toFixed(2));
  }



}


