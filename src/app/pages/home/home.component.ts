import { Component, type OnInit } from "@angular/core"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  studentName = "Jay"
  customTagline = "Streamline your inventory management with our comprehensive product tracking solution."

  constructor() {}

  ngOnInit(): void {}
}
