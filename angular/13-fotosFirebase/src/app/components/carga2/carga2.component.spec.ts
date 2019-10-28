import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carga2Component } from './carga2.component';

describe('Carga2Component', () => {
  let component: Carga2Component;
  let fixture: ComponentFixture<Carga2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carga2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carga2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
