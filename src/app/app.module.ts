import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { xelaController } from './xelaController';
import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { QuestionPage } from '../pages/question/question';
import { ResultPage } from '../pages/result/result';

/*
  NOTHING TO EDIT HERE !!!
  GO AWAY!!!
*/

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    QuestionPage,
    ResultPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    QuestionPage,
    ResultPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, xelaController]
})
export class AppModule {}
