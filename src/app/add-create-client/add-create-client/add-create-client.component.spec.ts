import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateClientComponent } from './add-create-client.component';

describe('AddCreateClientComponent', () => {
  let component: AddCreateClientComponent;
  let fixture: ComponentFixture<AddCreateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreateClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
