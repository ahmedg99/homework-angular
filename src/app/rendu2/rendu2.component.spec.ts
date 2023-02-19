import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rendu2Component } from './rendu2.component';

describe('Rendu2Component', () => {
  let component: Rendu2Component;
  let fixture: ComponentFixture<Rendu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rendu2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rendu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
