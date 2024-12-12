import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Flashcard } from '../../features/flashcards/domain/entities/flashcard.interface';
import { FlashcardService } from './flashcard.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  // flashcards = signal<Flashcard[]>([]); // Ya no es necesario aquí
  currentCardIndex = signal(0);
  showAnswer = signal(false);

  // Usamos los computeds del FlashcardService
  get currentCard(): number {
    return this.flashcardService.currentCard();
  }
  get totalCards(): number {
    return this.flashcardService.totalCards();
  }
  get currentQuestion(): string {
    return this.flashcardService.currentQuestion();
  }
  get currentAnswer(): string {
    return this.flashcardService.currentAnswer();
  }

  constructor(private flashcardService: FlashcardService) {}

  nextCard() {
    this.flashcardService.nextCard();
    this.showAnswer.set(false); // Ocultar la respuesta al navegar a la siguiente
  }

  previousCard() {
    this.flashcardService.previousCard();
    this.showAnswer.set(false); // Ocultar la respuesta al navegar a la anterior
  }

  toggleAnswer() {
    this.showAnswer.update((value) => !value);
  }
}
