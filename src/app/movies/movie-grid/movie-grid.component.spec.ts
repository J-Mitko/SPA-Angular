import { MovieThumbnailComponent } from './../movie-thumbnail/movie-thumbnail.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGridComponent } from './movie-grid.component';

describe('MovieGridComponent', () => {
  let component: MovieGridComponent;
  let fixture: ComponentFixture<MovieGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieGridComponent,
        MovieThumbnailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
