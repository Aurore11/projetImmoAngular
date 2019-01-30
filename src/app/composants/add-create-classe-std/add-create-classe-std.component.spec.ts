import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateClasseStdComponent } from './add-create-classe-std.component';

describe('AddCreateClasseStdComponent', () => {
  let component: AddCreateClasseStdComponent;
  let fixture: ComponentFixture<AddCreateClasseStdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreateClasseStdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateClasseStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
