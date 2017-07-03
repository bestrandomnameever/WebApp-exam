import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmangaComponent } from './addmanga.component';

describe('AddmangaComponent', () => {
  let component: AddmangaComponent;
  let fixture: ComponentFixture<AddmangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
