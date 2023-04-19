import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevacancyComponent } from './createvacancy.component';

describe('CreatevacancyComponent', () => {
  let component: CreatevacancyComponent;
  let fixture: ComponentFixture<CreatevacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatevacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
