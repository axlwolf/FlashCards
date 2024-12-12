import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent implements OnChanges {
  @ViewChild('percentageElement') percentageElement?: ElementRef;
  @Input() currentCard: number = 0;
  @Input() totalCards: number = 0;
  percentage: number = 0;

  ngOnChanges() {
    // Evitar división por cero
    if (this.currentCard === 1) {
      this.percentage = 0;
    } else {
      this.percentage = Number(
        Math.round((this.currentCard / this.totalCards) * 100)
      );
    }
    if (this.percentageElement) {
      this.percentageElement.nativeElement.innerText = `${this.percentage}%`;

      // Ajustar la posición del elemento, considerando el ancho del elemento
      const elementWidth = this.percentageElement.nativeElement.offsetWidth;
      const progressBarWidth =
        this.percentageElement.nativeElement.parentElement.offsetWidth;
      let leftPosition =
        (this.percentage / 100) * progressBarWidth - elementWidth / 2;

      // Asegurar que el elemento no se salga por la izquierda
      leftPosition = Math.max(0, leftPosition);

      // Asegurar que el elemento no se salga por la derecha
      leftPosition = Math.min(progressBarWidth - elementWidth, leftPosition);

      this.percentageElement.nativeElement.style.left = `${leftPosition}px`;
    }
  }
}
