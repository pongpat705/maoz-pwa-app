import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from '../../models/question-base';
import {FormGroup} from '@angular/forms';
import {QuestionControlService} from '../../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions!: QuestionBase<string>[];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {
  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  public onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
