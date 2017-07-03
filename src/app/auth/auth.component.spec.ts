import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Observable } from 'rxjs/Observable';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      providers: [
          {
              provide: ActivatedRoute, useValue: {
                  url: [
                      {
                          path: 'login'
                      }
                  ]
              }
          }
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.auth-container'));
    el = de.nativeElement;
  });

  it('text button should change when authType is register ', () => {
    fixture.detectChanges();
    var text = fixture.debugElement.query(By.css('.form-actions button')).nativeElement.textContent;
    expect(text).toMatch("Sign in");
  });
});