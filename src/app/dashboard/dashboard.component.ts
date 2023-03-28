import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { AddToAlbumComponent } from '../add-to-album/add-to-album.component';
import { PhotoDetailsComponent } from '../photo-details/photo-details.component';
import { PicsumApiService } from '../picsum-api.service';
import { UserService } from '../user.service';
// import {MatDialog, } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  photos$: BehaviorSubject<any> = new BehaviorSubject(null);
  

  constructor(private userService: UserService, public dialog: MatDialog,
    private picsumApiService: PicsumApiService) {

  }

  ngOnInit() {
    this.loadPhotos();
  }

  logout() {
    this.userService.logout()
  }

  loadPhotos() {
        this.picsumApiService.getPhotos().subscribe(photos => {
      this.photos$.next(photos)
    })
  }
  
  openDialogDetails() {
    const dialogRef = this.dialog.open(PhotoDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }



  openDialog(): void {
    const dialogRef = this.dialog.open(AddToAlbumComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
