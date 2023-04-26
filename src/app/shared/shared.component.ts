import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {
  cropwidth:number=75;
  @Input() rating: number = 0;
  @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();

  ngOnChanges():void{
    this.cropwidth = this.rating *75/5;
  }

  onClick():void{
    this.ratingClicked.emit(`this rating ${this.rating} was clicked!`);
  }
}
