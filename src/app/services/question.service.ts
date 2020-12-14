import { Injectable } from '@angular/core';
import {QuestionBase} from '../models/question-base';
import {QuestionDropdown} from '../models/question-dropdown';
import {QuestionTextbox} from '../models/question-textbox';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public getQuestions(): QuestionBase<string>[] {

    const questions: QuestionBase<string>[] = [

      new QuestionDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new QuestionTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new QuestionTextbox({
        key: 'mobileNo',
        label: 'Mobile Number',
        required: true,
        order: 4,
        regexp: /^[0-9]{10}\b/gm
      }),

      new QuestionTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        required: true,
        regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gm
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
