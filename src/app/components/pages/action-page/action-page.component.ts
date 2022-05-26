import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Action} from "../../../models/action";
import {ACTION_STATUS} from "../../../consts/action-status.const";
import {ActionService} from "../../../services/action.service";

@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.scss']
})
export class ActionPageComponent implements OnInit {
  public action: Action;
  public ACTION_STATUS = ACTION_STATUS;
  public pageLoaded = false;

  constructor(private route: ActivatedRoute,
              private actionService: ActionService) {
  }

  ngOnInit(): void {
    const actionId = this.route.snapshot.params.id;
    this.actionService.getAction(actionId).subscribe(response => {
      this.action = response.action;
      this.action.params = JSON.parse(this.action.params);
      this.pageLoaded = true;
    })
  }

}
