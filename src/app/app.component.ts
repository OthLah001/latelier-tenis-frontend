import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CustomHttpClientService } from './services/custom-http-client.service';
import { IPlayer, IStatistics } from './utils/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'latelier-tenis-frontend';

  public players: IPlayer[] = [];
  public statistics: IStatistics | null = null;
  public fetchingData: boolean = true;

  constructor(
    private customHttp: CustomHttpClientService
  ) { }

  public ngOnInit(): void {
    const playersObs = this.customHttp.get('/players');
    const statisticsObs = this.customHttp.get('/statistics');

    forkJoin([playersObs, statisticsObs]).subscribe(
      ([players, statistics]) => {
        this.players = players;
        this.statistics = statistics;
        this.fetchingData = false;
      }
    );
  }
}
