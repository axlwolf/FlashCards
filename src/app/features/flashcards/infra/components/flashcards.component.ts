import { Component, OnInit, signal } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { FlashcardService } from '../../../../shared/services/flashcard.service';
import { map, take, tap } from 'rxjs';
import { FlashcardComponent } from './flashcard.component';
import { Flashcard } from '../../domain/entities/flashcard.interface';
import { NgForOf } from '@angular/common';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [
    ProgressBarComponent,
    FlashcardComponent,
    NavigationComponent,
    NgForOf,
  ],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss',
})
export class FlashcardsComponent implements OnInit {
  public flashcards: Flashcard[] = [];
  public flashCardsSignal = signal<Flashcard[]>([]); // Inicializa el signal con un array vacío

  constructor(
    private flashcardService: FlashcardService,
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {}
}
