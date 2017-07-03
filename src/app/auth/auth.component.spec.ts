import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Observable } from 'rxjs/Observable';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { AuthComponent } from './auth.component';

import { UserService } from './../shared/services/user.service';

class UserServiceMock {
  constructor() {

  }
}

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    let userServiceMock = new UserServiceMock();
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            url: Observable.of(
              [
                {
                  path: 'login'
                }
              ]
            )
          }
        },
        {
          provide: UserService, userValue: userServiceMock
        }
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule
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