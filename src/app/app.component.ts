import {AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bowlers-anonymous';
  columns: number | undefined;

  breakPoints() {
    switch(true) {
      case (window.innerWidth <= 480):
        this.columns = 1;
        break;
      case (window.innerWidth > 480 && window.innerWidth <= 640):
        this.columns = 2;
        break;
      case (window.innerWidth > 640 && window.innerWidth <= 992):
        this.columns = 3;
        break;
      default:
        this.columns = 5;
    }
  }

  ngOnInit() {
    this.breakPoints();
  }

  onResize(event: any) {
    this.breakPoints();
  }
}
