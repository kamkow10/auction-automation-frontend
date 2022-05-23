import {Component, OnInit} from '@angular/core';
import {Action} from "../../../models/action";
import {ActionService} from "../../../services/action.service";

@Component({
  selector: 'app-your-action-page',
  templateUrl: './your-action-page.component.html',
  styleUrls: ['./your-action-page.component.scss']
})
export class YourActionPageComponent implements OnInit {
  public actions: Action[];

  constructor(private actionService: ActionService) {
  }

  ngOnInit(): void {
    this.actionService.getActions().subscribe(response => {
      this.actions = response.actions;
    })
  }

}
