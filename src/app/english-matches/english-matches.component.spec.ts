import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMatchesComponent } from './english-matches.component';

describe('EnglishMatchesComponent', () => {
  let component: EnglishMatchesComponent;
  let fixture: ComponentFixture<EnglishMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
