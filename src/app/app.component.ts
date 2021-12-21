import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WoolenCreations';
  public fetchedUsers: any[];

  constructor(private userService: AppService) {}

  ngOnInit() {
    this.userService.findByUsername().subscribe(
      (response: any[]) => this.fetchedUsers = response
    );
  }
}
