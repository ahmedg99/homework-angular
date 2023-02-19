import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkDescriptionComponent } from './homework-description.component';

describe('HomeworkDescriptionComponent', () => {
  let component: HomeworkDescriptionComponent;
  let fixture: ComponentFixture<HomeworkDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
