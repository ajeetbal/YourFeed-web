import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  toggleKey: Boolean = true;
  ngOnInit(): void {

  }
  toggle() {
    this.toggleKey = !this.toggleKey;
  }

}
