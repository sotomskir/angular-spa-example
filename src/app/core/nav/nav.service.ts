import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  private opened = false;

  constructor() { }

  toggle() {
    this.opened = !this.opened;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  isOpened() {
    return this.opened;
  }
}
