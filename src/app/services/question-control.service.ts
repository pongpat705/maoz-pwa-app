import { Injectable } from '@angular/core';
import {QuestionBase} from '../models/question-base';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  public toFormGroup(questions: QuestionBase<string>[] ): FormGroup {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = new FormControl(question.value || '');
      if (question.required) {
        group[question.key].setValidators(Validators.required);
      }
      if (question.regexp) {
        group[question.key].setValidators(Validators.pattern(question.regexp));
      }

    });
    return new FormGroup(group);
  }
}
