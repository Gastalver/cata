/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListachistesComponent } from './listachistes.component';

describe('ListachistesComponent', () => {
  let component: ListachistesComponent;
  let fixture: ComponentFixture<ListachistesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListachistesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListachistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
