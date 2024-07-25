import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'callback',
  template: '<p>Loading...</p>',
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkForAuthorizationCode();
    console.log("callback component initialized")
  }

  private checkForAuthorizationCode(): void {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      this.authService.exchangeCodeForToken(code).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
