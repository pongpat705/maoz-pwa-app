import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from '../../models/question-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.less']
})
export class DynamicFormQuestionComponent {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  constructor() {
    // this.question = new QuestionBase<string>();
    // // @ts-ignore
    // this.form = new FormGroup();
  }

  messageDictionary = {
    required : 'is required',
    pattern : 'is not match pattern'
  };

  get isValid(): boolean {
    return this.form.controls[this.question.key].valid;
  }

  get errorMessage(): any {
    let result = '';
    const errors = this.form.controls[this.question.key].errors;
    if (null != errors && errors.hasOwnProperty('required')){
      result += this.messageDictionary.required;
    }
    if (null != errors && errors.hasOwnProperty('pattern')){
      result += this.messageDictionary.pattern;
    }


    return result;
  }

}
