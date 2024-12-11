import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Flashcard} from "../../features/flashcards/domain/entities/flashcard.interface";

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private httpClient = inject(HttpClient);
  constructor() { }

  getFlashcards():Observable<Flashcard[]> {
    return this.httpClient.get<Flashcard[]>('http://localhost:3200/flashcards')
  }
}
