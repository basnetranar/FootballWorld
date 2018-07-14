import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaMatchesComponent } from './bundesliga-matches.component';

describe('BundesligaMatchesComponent', () => {
  let component: BundesligaMatchesComponent;
  let fixture: ComponentFixture<BundesligaMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundesligaMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligaMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
