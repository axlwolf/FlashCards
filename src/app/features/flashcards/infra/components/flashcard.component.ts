import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss'
})
export class FlashcardComponent {
  @Input() question!: string;
  @Input() answer!: string;
  @Input() showAnswer!: boolean;

}
