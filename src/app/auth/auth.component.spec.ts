import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router, RouterModule, UrlSegment } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
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

  let userServiceMock: UserServiceMock;
  let pathSubject: Subject<UrlSegment[]>;

  beforeEach(async(() => {
    userServiceMock = new UserServiceMock();
    pathSubject = new Subject<UrlSegment[]>();

    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            url: pathSubject
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
  });

  it("Text button and heading should be 'Sign in' when urlSegment is 'login'", fakeAsync(() => {
    fixture.detectChanges();
    pathSubject.next([{ path: 'login' }] as UrlSegment[]);
    tick();
    fixture.detectChanges();

    var buttonText = fixture.debugElement.query(By.css('.form-actions button')).nativeElement.textContent;
    expect(buttonText).toMatch("Sign in");
    var headingText = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
    expect(headingText).toMatch("Sign in");
  }));

  it("Text button and heading should be 'Sign up' when urlSegment is 'register'", fakeAsync(() => {
    fixture.detectChanges();
    pathSubject.next([{ path: 'register' }] as UrlSegment[]);
    tick();
    fixture.detectChanges();

    var buttonText = fixture.debugElement.query(By.css('.form-actions button')).nativeElement.textContent;
    expect(buttonText).toMatch("Sign up");
    var headingText = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
    expect(headingText).toMatch("Sign up");
  }));

  it('Email field is not valid if invalid email', fakeAsync(() => {
    fixture.detectChanges();
    pathSubject.next([{ path: 'register' }] as UrlSegment[]);
    tick();
    fixture.detectChanges();

    component.authForm.controls['email'].setValue("testatgmail.com");
    fixture.detectChanges();

    expect(component.authForm.controls['email'].valid).toBeFalsy();
  }));

  it('Not valid if not all the fields are filled in (register)', fakeAsync(() => {
    fixture.detectChanges();
    pathSubject.next([{ path: 'register' }] as UrlSegment[]);
    tick();
    fixture.detectChanges();

    component.authForm.controls['username'].setValue("test");
    component.authForm.controls['email'].setValue("test@gmail.com");
    component.authForm.controls['password'].setValue("");
    fixture.detectChanges();
    expect(!component.authForm.valid).toBeTruthy();
  }));

  it('Valid if all the fields are filled in (register)', fakeAsync(() => {
    fixture.detectChanges();
    pathSubject.next([{ path: 'register' }] as UrlSegment[]);
    tick();
    fixture.detectChanges();

    component.authForm.controls['username'].setValue("test");
    component.authForm.controls['email'].setValue("test@gmail.com");
    component.authForm.controls['password'].setValue("testerino");
    fixture.detectChanges();
    expect(component.authForm.valid).toBeTruthy();
  }));
});