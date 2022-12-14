import { Component, OnInit } from '@angular/core';

export interface LeaderboardElement {
  name: string;
  position: number;
  score: number;
}

const ELEMENT_DATA: LeaderboardElement[] = [
  {position: 1, name: 'CBiscuit', score: 173},
  {position: 2, name: 'CBreezy', score: 169},
  {position: 3, name: 'Matty Ice', score: 143},
  {position: 4, name: 'Freckles', score: 117},
  {position: 5, name: 'A', score: 0},
  {position: 6, name: 'B', score: 0},
  {position: 7, name: 'C', score: 0},
  {position: 8, name: 'D', score: 0},
  {position: 9, name: 'E', score: 0},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
