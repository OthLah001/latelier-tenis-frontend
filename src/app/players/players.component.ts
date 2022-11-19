import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../utils/models';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  @Input() public players: IPlayer[] = [];

  public filterStr: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
