import {Item} from './item.interface';


export const ITEMS: Item[] = [
  {name: "Infinity Edge", damage: 80, critical: 25, speed: 0, cdr: 0, img: "Infinity_Edge_item.png"},
  {name: "Trinity Force", damage: 25, critical: 0, speed: 40, cdr: 20, img: "Trinity_Force_item.png"},
  {name: "Phantom Dancer", damage: 0, critical: 25, speed: 30, cdr: 0, img: "Phantom_Dancer_item.png"},
  {name: "Rapid Firecannon", damage: 0, critical: 25, speed: 30, cdr: 0, img: "Rapid_Firecannon_item.png"},
  {name: "Statikk Shiv", damage: 0, critical: 25, speed: 40, cdr: 0, img: "Statikk_Shiv_item.png"},
  {name: "Stormrazor", damage: 60, critical: 0, speed: 30, cdr: 0, img: "Stormrazor_item.png"},
  {name: "Runaan's Hurricane", damage: 0, critical: 25, speed: 40, cdr: 0, img: "Runaans_Hurricane_item.png"},
  {name: "Essence Reaver", damage: 70, critical: 25, speed: 0, cdr: 20, img: "Essence_Reaver_item.png"},
  {name: "Blade of the Ruined King", damage: 40, critical: 0, speed: 25, cdr: 0, img: "Blade_of_the_Ruined_King_item.png"},
  {name: "Death's Dance", damage: 80, critical: 0, speed: 0, cdr: 10, img: "Deaths_Dance_item.png"},
  {name: "Bloodthirster", damage: 80, critical: 0, speed: 0, cdr: 0, img: "The_Bloodthirster_item.png"},
  {name: "Guinsoo's Rageblade", damage: 25, critical: 0, speed: 73, cdr: 0, img: "Guinsoos_Rageblade_item.png"},

];

ITEMS.forEach( i => {
  i.img = "assets/img/" + i.img;
});

export const BOOTS: {name, damage, cdr, speed, critical, img}[] = [
  {name: "Berserker's Greaves", damage: 0, critical: 0, speed: 35, cdr: 0, img: "Berserkers_Greaves_item.png"},
  {name: "Ionian Boots of Lucidity", damage: 0, cdr: 10, speed: 0, critical: 0, img: "Ionian_Boots_of_Lucidity_item.png"},


];
