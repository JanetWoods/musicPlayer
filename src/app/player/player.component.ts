import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['../app.component.scss']
})
export class PlayerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  title = "player";

}
