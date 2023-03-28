import { Component} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-to-album',
  templateUrl: './add-to-album.component.html',
  styleUrls: ['./add-to-album.component.css']
})
export class AddToAlbumComponent {
  
constructor( public dialogRef: MatDialogRef<AddToAlbumComponent>) {


}

  close() {
    this.dialogRef.close();
  }
  create() {

  }
  addTo() {
    
  }

}
