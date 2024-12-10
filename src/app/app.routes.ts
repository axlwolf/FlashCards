import { Routes } from '@angular/router';
import {SplashScreenComponent} from "./features/splash-screen/infra/components/splash-screen.component";
import {FlashcardComponent} from "./features/flashcards/infra/components/flashcard.component";

export const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent
  },
  {
    path: 'flashcards',
    component: FlashcardComponent
  }
];
