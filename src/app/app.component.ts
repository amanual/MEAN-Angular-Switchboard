import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  defaultOFF = [false, false, false, false, false, false, false, false, false, false];
  switch2(idx) {  
    this.defaultOFF[idx] = !this.defaultOFF[idx];
  } 
}
