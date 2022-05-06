import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(): void {
    this.show = !this.show;
  }

}
