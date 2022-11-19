import { Component, OnInit } from '@angular/core';
import { CustomHttpClientService } from './services/custom-http-client.service';
import { IPlayer } from './utils/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'latelier-tenis-frontend';

  public players: IPlayer[] = [];

  constructor(
    private customHttp: CustomHttpClientService
  ) { }

  public ngOnInit(): void {
    this.customHttp.get('/players').subscribe(
      players => {
        this.players = players;
      }
    )
  }
}
