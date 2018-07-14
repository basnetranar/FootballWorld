import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchLeagueTeamsComponent } from './french-league-teams.component';

describe('FrenchLeagueTeamsComponent', () => {
  let component: FrenchLeagueTeamsComponent;
  let fixture: ComponentFixture<FrenchLeagueTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchLeagueTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchLeagueTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
