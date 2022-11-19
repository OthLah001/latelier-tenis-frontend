import { Component, Input, OnInit } from '@angular/core';
import { CustomHttpClientService } from '../services/custom-http-client.service';
import { IPlayer } from '../utils/models';
import { MatDialog } from '@angular/material/dialog';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  @Input() public players: IPlayer[] = [];

  public filterStr: string = "";

  constructor(
    private customHttp: CustomHttpClientService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onShowPlayer(id: number) {
    this.customHttp.get(`/player/${id}`).subscribe(
      player => {
        console.log(player)
        this.dialog.open(PlayerComponent, {
          height: '100%',
          width: '100%',
          panelClass: "player-dialog",
          data: {
            player: player
          }
        });
      }
    )
  }

}
