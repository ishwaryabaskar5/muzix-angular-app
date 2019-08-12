import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() private tracks;
  @Input() private isSaved;
  private disableNext = false;
  private disablePrevious = true;
  private cardCount = Array(5).fill(0).map((x, i) => i);
  private page = 0;

  constructor() { }

  ngOnInit() {

  }

  loadNext() {
    this.disablePrevious = false;
    if (this.tracks.length !== this.page) {
      this.page = this.page + 5;
    } else if (this.tracks.length === this.page) {
      this.disableNext = true;

    }
  }

  loadPrevious() {
    this.disableNext = false;
    if (this.page > 0) {
      this.page = this.page - 5;
    } else {
      this.disablePrevious = true;

    }

  }
}
