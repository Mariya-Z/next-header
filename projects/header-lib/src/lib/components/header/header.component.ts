import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() env: string;
  @Input() role: string;
  @Input() descr: string;
  @Output() ref = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  refClicked(): void {
    this.ref.emit();
  }

}
