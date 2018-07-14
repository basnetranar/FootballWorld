import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianSeriaTableComponent } from './italian-seria-table.component';

describe('ItalianSeriaTableComponent', () => {
  let component: ItalianSeriaTableComponent;
  let fixture: ComponentFixture<ItalianSeriaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianSeriaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianSeriaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
