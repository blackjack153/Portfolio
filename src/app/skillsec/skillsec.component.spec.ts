import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsecComponent } from './skillsec.component';

describe('SkillsecComponent', () => {
  let component: SkillsecComponent;
  let fixture: ComponentFixture<SkillsecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
