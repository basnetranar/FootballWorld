import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaTeamsComponent } from './bundesliga-teams.component';

describe('BundesligaTeamsComponent', () => {
  let component: BundesligaTeamsComponent;
  let fixture: ComponentFixture<BundesligaTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundesligaTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
