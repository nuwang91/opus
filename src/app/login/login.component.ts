import { Component, ViewEncapsulation, NgModule } from "@angular/core";
import { AuthService } from "../services";
import { Router, ActivatedRoute } from "@angular/router";
import { CommonModule } from "../../../node_modules/@angular/common";
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from "../../../node_modules/@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
    public form: FormGroup;
    public returnUrl: string;

    constructor( private fb: FormBuilder,
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router) {

        this.form = this.fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    // tslint:disable-next-line:use-life-cycle-interface
    public ngOnInit(): any {

        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    }

    public login(): any {
        const val = this.form.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe(
                    () => {
                        this.router.navigate([this.returnUrl]);
                    }
                );
        }
    }
}
