/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChisteComponent } from './chiste.component';

describe('ChisteComponent', () => {
  let component: ChisteComponent;
  let fixture: ComponentFixture<ChisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
