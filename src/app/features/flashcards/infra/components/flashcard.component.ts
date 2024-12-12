import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss',
  animations: [
    trigger('cardFlip', [
      state(
        'showAnswer',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'hideAnswer',
        style({
          transform: 'rotateY(0deg)',
        })
      ),
      transition('showAnswer <=> hideAnswer', [animate('500ms ease-out')]),
    ]),
  ],
})
export class FlashcardComponent {
  @Input() question!: string;
  @Input() answer!: string;
  @Input() showAnswer!: boolean;
}
