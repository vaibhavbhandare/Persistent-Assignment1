import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let dummyTest = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    dummyTest = [
      { username: 'testatrix', password: 'admin'}
    ];
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should have isLogin declared`, () => {
    fixture.detectChanges();
    expect(component.isLogin).toBeUndefined();
  });

  it(`should have loginForm declared`, () => {
    fixture.detectChanges();
    expect(component.loginForm).toBeDefined();
  });

  it(`should have dispatchAction called`, () => {
    fixture.detectChanges();
    expect(component.dispatchAction(dummyTest)).toBeUndefined();
  });

  it(`should have onSubmit declared`, () => {
    fixture.detectChanges();
    expect(component.onSubmit(dummyTest)).toBeUndefined();
  });
});
