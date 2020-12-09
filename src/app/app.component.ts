import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionBase} from './models/question-base';
import {QuestionService} from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pwa-app';

}
