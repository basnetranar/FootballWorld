import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchLeagueMatchesComponent } from './french-league-matches.component';

describe('FrenchLeagueMatchesComponent', () => {
  let component: FrenchLeagueMatchesComponent;
  let fixture: ComponentFixture<FrenchLeagueMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchLeagueMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchLeagueMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
