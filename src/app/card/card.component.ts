import { Component, OnInit, Input } from '@angular/core';
import { TrackService } from '../track.service';
import { Track } from '../track';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() private track;
  @Input() private isSaved;
  @Input() private trackId;

  private icon;
  private savedTrack: Track = new Track();
  private removedTrack: Track;
  private errorMsg;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.icon = this.isSaved ? 'bookmark' : 'bookmark_border';

  }

  onClick() {
    if (this.icon === 'bookmark_border') {
      this.addToWishList();
    } else {
      this.removeFromWishList();
    }
  }

  addToWishList() {
    this.savedTrack.id = this.trackId;
    this.savedTrack.name = this.track.name;
    this.savedTrack.comment = this.track.artist.name;
    this.icon = 'bookmark';
    this.trackService.saveTrack(this.savedTrack).subscribe(data => this.savedTrack = data, error => this.errorMsg = error);
    // window.location.reload();
  }
  removeFromWishList() {
    this.trackService.deleteTrack(this.track.id).subscribe(data => this.removedTrack = data, error => this.errorMsg = error);
    this.icon = 'bookmark_border';

    // window.location.reload();
  }

}
