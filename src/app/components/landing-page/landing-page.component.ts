import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionBase} from '../../models/question-base';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent {
  questions: QuestionBase<string>[];

  constructor(private service: QuestionService) {
    this.questions = this.service.getQuestions();
  }


}
