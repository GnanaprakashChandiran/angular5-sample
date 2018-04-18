import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public http : Http) {}
  saveData() {
    this.http.post('/student', { name : 'gp', age : 15}).subscribe( (data) => {
      console.log('data', data);
    });
  }
}
