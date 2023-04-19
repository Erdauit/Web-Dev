import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesbycompanyComponent } from './vacanciesbycompany.component';

describe('VacanciesbycompanyComponent', () => {
  let component: VacanciesbycompanyComponent;
  let fixture: ComponentFixture<VacanciesbycompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanciesbycompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanciesbycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
