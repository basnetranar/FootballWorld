import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianSeriaComponent } from './italian-seria.component';

describe('ItalianSeriaComponent', () => {
  let component: ItalianSeriaComponent;
  let fixture: ComponentFixture<ItalianSeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianSeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianSeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
