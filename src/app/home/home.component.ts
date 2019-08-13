import { Component, OnInit, Input } from '@angular/core';
import { TrackService } from '../track.service';
import { Track } from '../track';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private topTracks;
  private errorMsg;
  private wishList;

  private deletedTrack: Track;
  private updatedTrack: Track = new Track();

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getTopTracks().subscribe(data => this.topTracks = data, error => this.errorMsg = error);

  }

  deleteTrack(id) {
    this.trackService.deleteTrack(id).subscribe(data => this.deletedTrack = data, error => this.errorMsg = error);
  }

  updateTrack(Tid, name, comment) {
    this.updatedTrack.id = Tid;
    this.updatedTrack.name = name;
    this.updatedTrack.comment = comment;
    this.trackService.updateTrack(0, this.updatedTrack).subscribe(data => this.updatedTrack = data, error => this.errorMsg = error);
  }
}
