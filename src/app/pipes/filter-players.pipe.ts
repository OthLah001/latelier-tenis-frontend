import { Pipe, PipeTransform } from '@angular/core';
import { IPlayer } from '../utils/models';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(players: IPlayer[], value: string): IPlayer[] {
    value = value.toLowerCase();

    return players.filter((p) => {
      return p.firstname.toLowerCase().includes(value) || p.lastname.toLowerCase().includes(value)
    });;
  }

}
