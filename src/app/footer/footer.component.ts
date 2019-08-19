import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/twitter-letter-logo.svg'));
    iconRegistry.addSvgIcon('youtube', sanitizer.bypassSecurityTrustResourceUrl('assets/youtube-play-button.svg'));
    iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/facebook-logo.svg'));

  }

  ngOnInit() {
  }

}
