import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianSeriaTeamsComponent } from './italian-seria-teams.component';

describe('ItalianSeriaTeamsComponent', () => {
  let component: ItalianSeriaTeamsComponent;
  let fixture: ComponentFixture<ItalianSeriaTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianSeriaTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianSeriaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
