import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter:number=0;
  increment(){
    this.counter++;
  }
  reset(){
    this.counter=0;
  }
  decrement(){
    this.counter--;
  }
}
