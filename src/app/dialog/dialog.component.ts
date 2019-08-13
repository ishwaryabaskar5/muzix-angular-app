import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Track, Itrack } from '../track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  private updatedTrack;
  private errorMsg;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Itrack, private trackService: TrackService) { }

  ngOnInit() { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  editTrack() {
    console.log('update function called');
    this.trackService.updateTrack(this.data.track.id, this.data.track).subscribe(data => this.updatedTrack = data, error => this.errorMsg = error);

  }
}

