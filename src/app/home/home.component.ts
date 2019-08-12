import { Component, OnInit, Input } from '@angular/core';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private topTracks;
  private errorMsg;
  private wishList;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getTrackList().subscribe(data => this.wishList = data, error => this.errorMsg = error);

    this.trackService.getTopTracks().subscribe(data => this.topTracks = data, error => this.errorMsg = error);
  }


}
