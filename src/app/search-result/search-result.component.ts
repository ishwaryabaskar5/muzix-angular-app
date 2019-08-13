import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  private searchResult;
  private errorMsg;
  private trackName;
  private track;
  constructor(private trackService: TrackService, private activeRoute: ActivatedRoute) {
    activeRoute.paramMap.subscribe(val => {
      this.getSearchResults();
    });

   }

  ngOnInit() {
  }

  getSearchResults() {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => { this.trackName = param.get('name'); });
    this.trackService.searchTrackByName(this.trackName).subscribe(data => this.searchResult = data, error => this.errorMsg = error);
  }

}
