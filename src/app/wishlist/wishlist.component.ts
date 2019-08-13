import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  private wishList;
  private errorMsg;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getTrackList().subscribe(data => this.wishList = data, error => this.errorMsg = error);

  }

}
