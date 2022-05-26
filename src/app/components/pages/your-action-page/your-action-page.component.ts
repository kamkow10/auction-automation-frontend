import {Component, OnInit} from '@angular/core';
import {Action} from "../../../models/action";
import {ActionService} from "../../../services/action.service";
import {TimeService} from "../../../services/time.service";

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
    console.log(new Date());
    this.actionService.getActions().subscribe(response => {
      response.actions.sort((a1, a2) => {
        return new Date(a2.creationDate).getTime() - new Date(a1.creationDate).getTime()
      })
      this.actions = response.actions.map(action => {
        return {...action, creationDate: TimeService.convertDatetimeToText(action.creationDate)}
      });
    })
  }

}
