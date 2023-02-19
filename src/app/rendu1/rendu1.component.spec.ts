import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rendu1Component } from './rendu1.component';

describe('Rendu1Component', () => {
  let component: Rendu1Component;
  let fixture: ComponentFixture<Rendu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rendu1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rendu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
