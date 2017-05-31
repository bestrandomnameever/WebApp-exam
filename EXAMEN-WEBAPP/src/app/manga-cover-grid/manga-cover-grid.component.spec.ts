import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaCoverGridComponent } from './manga-cover-grid.component';

describe('MangaCoverGridComponent', () => {
  let component: MangaCoverGridComponent;
  let fixture: ComponentFixture<MangaCoverGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaCoverGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaCoverGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
