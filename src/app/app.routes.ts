import { Routes } from '@angular/router';
import {SplashScreenComponent} from "./features/splash-screen/infra/components/splash-screen.component";
import {FlashcardsComponent} from "./features/flashcards/infra/components/flashcards.component";

export const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent
  },
  {
    path: 'flashcards',
    component: FlashcardsComponent
  }
];
