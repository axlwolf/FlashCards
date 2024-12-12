import {Injectable, signal, computed, inject} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Flashcard } from "../../features/flashcards/domain/entities/flashcard.interface";

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3200/flashcards'; // URL de tu API

  flashcards = signal<Flashcard[]>([]);
  currentCardIndex = signal(0);
  showAnswer = signal(false);

  currentCard = computed(() => this.currentCardIndex() + 1);
  totalCards = computed(() => this.flashcards().length);
  currentQuestion = computed(() => this.flashcards()[this.currentCardIndex()]?.question); // Optional chaining (?.)
  currentAnswer = computed(() => this.flashcards()[this.currentCardIndex()]?.answer); // Optional chaining (?.)

  getFlashcards(): Observable<Flashcard[]> {
    return this.httpClient.get<Flashcard[]>(this.apiUrl);
  }

  nextCard() {
    this.currentCardIndex.update(index => Math.min(index + 1, this.flashcards().length - 1));
  }

  previousCard() {
    this.currentCardIndex.update(index => Math.max(index - 1, 0));
  }

  toggleAnswer() {
    this.showAnswer.update(value => !value);
  }
}
