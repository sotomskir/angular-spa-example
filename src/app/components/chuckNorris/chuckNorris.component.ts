import { Component, OnInit } from '@angular/core';
import { ChuckNorris } from "../../models/ChuckNorris";
import { ChuckNorrisService } from "../../services/chuckNorris.service";

@Component({
  selector: 'chuckNorris',
  templateUrl: 'chuckNorris.component.html',
})
export class ChuckNorrisComponent implements OnInit {
  private chuckNorrisFacts: ChuckNorris[];

  constructor(private chuckNorrisService: ChuckNorrisService) {}

  ngOnInit(): void { this.getChuckNorrisFacts() }

  private getChuckNorrisFacts() {
    this.chuckNorrisService.getChuckNorrisFacts().subscribe(chuckNorrisFacts => {
      this.chuckNorrisFacts = chuckNorrisFacts;
    }, error => {

    })
  }

}
