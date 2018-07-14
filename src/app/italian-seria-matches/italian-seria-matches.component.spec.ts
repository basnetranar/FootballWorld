import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianSeriaMatchesComponent } from './italian-seria-matches.component';

describe('ItalianSeriaMatchesComponent', () => {
  let component: ItalianSeriaMatchesComponent;
  let fixture: ComponentFixture<ItalianSeriaMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianSeriaMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianSeriaMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
