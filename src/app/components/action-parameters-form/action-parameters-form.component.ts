import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ACTION_TYPES} from "../../consts/action-type.const";
import {CustomActionParams} from "../../models/custom-action-params";

@Component({
  selector: 'app-action-parameters-form',
  templateUrl: './action-parameters-form.component.html',
  styleUrls: ['./action-parameters-form.component.scss']
})
export class ActionParametersFormComponent implements OnInit {
  @Input() actionTypeId: number;
  @Output() onSetParams = new EventEmitter<CustomActionParams>();

  public ACTION_TYPES = ACTION_TYPES;

  constructor() { }

  ngOnInit(): void {
  }

  public onParamsChanged(customActionParams: CustomActionParams): void {
    this.onSetParams.emit(customActionParams);
  }

}
