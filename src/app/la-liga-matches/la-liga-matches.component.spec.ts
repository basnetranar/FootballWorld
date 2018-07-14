import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLigaMatchesComponent } from './la-liga-matches.component';

describe('LaLigaMatchesComponent', () => {
  let component: LaLigaMatchesComponent;
  let fixture: ComponentFixture<LaLigaMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaLigaMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLigaMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
