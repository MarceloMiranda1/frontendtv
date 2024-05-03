import { Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-view-tutor',
  templateUrl: './view-tutor.component.html',
  styleUrls: ['./view-tutor.component.css']
})
export class ViewTutorComponent {
  constructor(public dialogRef: MatDialogRef<ViewTutorComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }


}
