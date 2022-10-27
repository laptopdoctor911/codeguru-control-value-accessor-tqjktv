import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    age: new FormControl(0, [Validators.required])
  });
}
