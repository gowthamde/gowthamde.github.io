import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetSectionComponent } from './skillset-section.component';

describe('SkillsetSectionComponent', () => {
  let component: SkillsetSectionComponent;
  let fixture: ComponentFixture<SkillsetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
