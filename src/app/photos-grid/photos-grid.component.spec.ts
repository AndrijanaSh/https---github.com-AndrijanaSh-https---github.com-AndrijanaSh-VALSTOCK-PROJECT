import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosGridComponent } from './photos-grid.component';

describe('PhotosGridComponent', () => {
  let component: PhotosGridComponent;
  let fixture: ComponentFixture<PhotosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
