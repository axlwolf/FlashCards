import {Component, Input} from '@angular/core';
import {Flashcard} from "../../domain/entities/flashcard.interface";

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss'
})
export class FlashcardComponent {
  @Input() flashCard!: Flashcard;

}
