import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numberOfChanges: { number: number; };

  constructor (private usersService: UsersService) {}

  ngOnInit() {
    this.numberOfChanges=this.usersService.numberOfChanges;
  }
}
