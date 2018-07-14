import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchLeagueTableComponent } from './french-league-table.component';

describe('FrenchLeagueTableComponent', () => {
  let component: FrenchLeagueTableComponent;
  let fixture: ComponentFixture<FrenchLeagueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchLeagueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchLeagueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
