import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stin19';

  ping: string ="";

  handlePing(event: string) {
    this.ping = event;
    console.log(event)
  }
}
