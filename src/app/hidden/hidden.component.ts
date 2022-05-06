import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.scss']
})
export class HiddenComponent implements OnInit {

  noShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNoShow(): void {
    this.noShow = !this.noShow;
  }

}
