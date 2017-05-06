import { Component, OnInit } from '@angular/core';
import { ChuckService } from './chuck.service';
import { Chuck } from './chuck.model';

@Component({
  templateUrl: 'chuck.component.html',
})
export class ChuckComponent implements OnInit {
  public chuckNorrisFacts: Chuck[];

  constructor(private chuckNorrisService: ChuckService) {}

  ngOnInit(): void { this.getChuckNorrisFacts(); }

  private getChuckNorrisFacts() {
    this.chuckNorrisService.getChuckNorrisFacts().subscribe(chuckNorrisFacts => {
      this.chuckNorrisFacts = chuckNorrisFacts;
    }, error => {

    });
  }

}
