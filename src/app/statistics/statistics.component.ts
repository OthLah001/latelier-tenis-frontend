import { Component, Input, OnInit } from '@angular/core';
import { IStatistics } from '../utils/models';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() statistics: IStatistics | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
