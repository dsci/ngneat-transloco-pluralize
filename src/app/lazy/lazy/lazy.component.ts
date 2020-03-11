import { Component, OnInit } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.css"]
})
export class LazyComponent implements OnInit {
  constructor(private service: TranslocoService) {}

  ngOnInit() {
    this.service
      .selectTranslate("adminPage.title", {}, "admin-page")
      .subscribe(console.log);
  }
}
