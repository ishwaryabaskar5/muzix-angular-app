import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private trackName;

  constructor(private trackService: TrackService, private router: Router) { }

  ngOnInit() {
  }

  search() {
    let name =  this.trackName;
    this.router.navigate(['/search', name]);
  }
}
