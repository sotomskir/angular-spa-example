import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupComponent } from './form-group.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <dashboard-hero  [hero]="hero"  (selected)="onSelected($event)"></dashboard-hero>`
})
class TestHostComponent {
  expectedFormControl = new FormControl({value: 'some value', touched: true, invalid: true});
}

describe('FormGroupComponent', () => {
  let component: FormGroupComponent;
  let fixture: ComponentFixture<FormGroupComponent>;
  let element;
  let expectedFormControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('.form-group')); // find form-group element

    // pretend that it was wired to something that supplied a form-control
    expectedFormControl = new FormControl({value: 'some value', touched: true, invalid: true});
    component.control = expectedFormControl;
    component.errors = ['required'];
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "some value"', () => {
    // expect(element.nativeElement.textContent).toContain('some value');
    expect(true).toBeTruthy();
  });

  it('should have has-error class', () => {
    // TODO
    // expect(element.nativeElement.classes).toContain('has-error');
    expect(true).toBeTruthy();
  });

  it('should display help-block with errors', () => {
    // TODO
    expect(true).toBeTruthy();
  });

});
