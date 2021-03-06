import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../service/sports.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { LogInSuccess, LogInFailure } from '../store/actions/auth.action';

@Component({
  selector: 'app-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: any;
  public isLogin: boolean;

  constructor(private fb: FormBuilder,
              private sportsService: SportsListService,
              private router: Router,
              private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(credentials: any): void {
    this.sportsService.getLoginCheck().subscribe(checklogin => {
      if (credentials && checklogin) {
        const login = checklogin;
        for (let i = 0; i <= login.length - 1; i++) {
          if (login[i].username === credentials.username) {
            this.isLogin = true;
            this.router.navigate(['/list', { term: true }]);
            alert(`${credentials.username} Login Successfully`);
            this.dispatchAction(credentials, this.isLogin);
            break;
          } else {
            this.isLogin = false;
          }
        }
      }
      if (this.isLogin === false) {
        this.dispatchAction(credentials, this.isLogin);
      }
    },
      (error) => {
        console.log('Error in Fetching Login API');
      }
    );
  }

  dispatchAction(credentials, isLogin?): void {
    const payload = {
      username: credentials.username,
      password: credentials.password
    };
    if (isLogin) {
      this.store.dispatch(new LogInSuccess(payload));
    } else {
      this.store.dispatch(new LogInFailure(payload));
    }
  }
}
