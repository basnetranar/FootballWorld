import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLigaTeamsComponent } from './la-liga-teams.component';

describe('LaLigaTeamsComponent', () => {
  let component: LaLigaTeamsComponent;
  let fixture: ComponentFixture<LaLigaTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaLigaTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLigaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
