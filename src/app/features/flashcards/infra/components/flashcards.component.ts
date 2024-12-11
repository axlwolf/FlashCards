import { Component, OnInit, signal } from '@angular/core';
import { ProgressBarComponent } from "./progress-bar.component";
import { NavigationComponent } from "./navigation.component";
import { FlashcardService } from "../../../../shared/services/flashcard.service";
import {map, take, tap} from "rxjs";
import { FlashcardComponent } from "./flashcard.component";
import { Flashcard } from "../../domain/entities/flashcard.interface";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [
    ProgressBarComponent,
    NavigationComponent,
    FlashcardComponent,
    NgForOf
  ],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss'
})
export class FlashcardsComponent implements OnInit {
  public flashcards: Flashcard[] = [];
  public flashCardsSignal = signal<Flashcard[]>([]); // Inicializa el signal con un array vacío

  constructor(private flashcardService: FlashcardService) { }

  // ngOnInit(): void {
  //   this.flashcardService.getFlashcards().pipe(
  //     take(1),
  //     tap(flashcard => console.log({ flashcard: flashcard[0] }))
  //   ).subscribe(flashcards => {
  //     console.log({ flashcards })
  //     this.flashcards = flashcards;
  //     this.flashCardsSignal.set(this.flashcards); // Usa .set() para actualizar el signal
  //   });
  // }
  ngOnInit(): void {
    this.flashcardService.getFlashcards().pipe(
      take(1),
      // Selecciona solo la primera flashcard del array
      map(flashcards => flashcards[0]),
      tap(flashcard => console.log({ flashcard }))
    ).subscribe(flashcard => {
      this.flashCardsSignal.set([flashcard]); // Envuelve la flashcard en un array
    });
  }
}
