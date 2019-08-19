import { Component, OnInit, Input } from '@angular/core';
import { TrackService } from '../track.service';
import { Track } from '../track';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

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
  private imgSrc;

  constructor(private trackService: TrackService, public dialog: MatDialog) { }

  ngOnInit() {
    this.icon = this.isSaved ? 'bookmark' : 'bookmark_border';
    this.imgSrc = (this.track.image !== undefined) ? this.track.image[0]['#text'] : 'assets/song1.jpeg';

  }

  onClick() {
    if (this.icon === 'bookmark_border') {
      this.addToWishList();
    } else {
      this.removeFromWishList();
    }
  }

  addToWishList() {
    console.log('add to wishlist function called');
    this.savedTrack.id = this.trackId;
    this.savedTrack.name = this.track.name;
    this.savedTrack.comment = this.track.artist.name;
    this.icon = 'bookmark';
    this.trackService.saveTrack(this.savedTrack).subscribe(data => this.savedTrack = data, error => this.errorMsg = error);
    alert('added to wishist');
    // window.location.reload();
  }
  removeFromWishList() {
    console.log('remove from function called');
    if (this.track.id) {
    this.trackService.deleteTrack(this.track.id).subscribe(data => this.removedTrack = data, error => this.errorMsg = error);
    window.location.reload();
  } else {
    this.trackService.deleteTrack(this.trackId).subscribe(data => this.removedTrack = data, error => this.errorMsg = error);
    }
    this.icon = 'bookmark_border';
    alert('removed from wishist');

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { track: this.track }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
