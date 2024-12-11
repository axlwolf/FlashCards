import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {trigger, state, style, animate, transition} from "@angular/animations";
import { take, timer } from "rxjs";

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
  animations: [
    trigger('progressAnimation', [
      state('increasing', style({
        width: '100%',
      })),
      state('decreasing', style({
        width: '0',
      })),
      // transition('increasing => decreasing', animate('3s ease-in')), // Valor válido: ease-in
      transition('decreasing => increasing', animate('1s ease-out'))  // Valor válido: ease-out
    ])
  ]
})
export class SplashScreenComponent implements OnInit, AfterViewInit {
  private direction: number = 1;
  progressState:string= 'increasing';

  private router = inject(Router);
  @ViewChild('progressElement')
  private _progressElement!: ElementRef;


  constructor() { }

  ngOnInit() {
    this.updateProgress();

    timer(2000).pipe(take(1)).subscribe(() => {
      this.router.navigate(['/flashcards']);
    });

  }

  ngAfterViewInit() {
  }

  updateProgress() {
    // Access the value through this._progressElement.nativeElement.value
    // this._progressElement.nativeElement.value += this.direction * 0.2;
    // if (this._progressElement.nativeElement.value >= 100) {
    //   this.direction = -1;
    // } else if (this._progressElement.nativeElement.value <= 0) {
    //   this.direction = 1;
    //   this._progressElement.nativeElement.value = 0;
    // }
    // requestAnimationFrame(() => this.updateProgress());
    if(this.progressState === 'increasing') {
      this.progressState = 'decreasing';
    } else {
      this.progressState = 'increasing';
    }

    setTimeout(() => {
      this.updateProgress();
    }, 1000)
  }
}
