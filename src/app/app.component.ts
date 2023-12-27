import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: "eat", done: false},
    { description: "dance", done: false},
    { description: "play", done: true},
    { description: "laugh", done: false},
    { description: "study", done: false},
  ]

  get items(){
    if(this.filter === "all"){
      return this.allItems;
    }

    return this.allItems.filter((item)=>{
      this.filter === "done" ? item.done : !item.done
    })
  }

  addItem(description: string){
    this.allItems.unshift({
      description,
      done: false
    })
    console.log(this.allItems)
  }

  remove(item: Item){
    this.allItems.splice(this.allItems.indexOf(item),1)
  }
}
