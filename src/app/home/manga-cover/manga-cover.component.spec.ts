import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaCoverComponent } from './manga-cover.component';

describe('MangaCoverComponent', () => {
  let component: MangaCoverComponent;
  let fixture: ComponentFixture<MangaCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
