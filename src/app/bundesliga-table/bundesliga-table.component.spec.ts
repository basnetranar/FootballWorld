import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaTableComponent } from './bundesliga-table.component';

describe('BundesligaTableComponent', () => {
  let component: BundesligaTableComponent;
  let fixture: ComponentFixture<BundesligaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundesligaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
