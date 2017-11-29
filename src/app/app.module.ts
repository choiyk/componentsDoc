import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { ButtonPage } from '../pages/button/button';
import { BadgePage } from '../pages/badge/badge';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    ButtonPage,
    BadgePage,
    CardPage,
    CheckboxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    ButtonPage,
    BadgePage,
    CardPage,
    CheckboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
