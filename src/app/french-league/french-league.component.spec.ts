import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchLeagueComponent } from './french-league.component';

describe('FrenchLeagueComponent', () => {
  let component: FrenchLeagueComponent;
  let fixture: ComponentFixture<FrenchLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
