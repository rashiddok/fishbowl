import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactionsComponent implements OnInit {
  showReactions: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
