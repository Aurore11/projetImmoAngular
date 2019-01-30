import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClasseStandardComponent } from './list-classe-standard.component';

describe('ListClasseStandardComponent', () => {
  let component: ListClasseStandardComponent;
  let fixture: ComponentFixture<ListClasseStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClasseStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClasseStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
