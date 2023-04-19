import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevacancyComponent } from './updatevacancy.component';

describe('UpdatevacancyComponent', () => {
  let component: UpdatevacancyComponent;
  let fixture: ComponentFixture<UpdatevacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatevacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
