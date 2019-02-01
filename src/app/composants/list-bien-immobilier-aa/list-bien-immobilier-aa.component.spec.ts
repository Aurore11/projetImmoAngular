import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBienImmobilierAAComponent } from './list-bien-immobilier-aa.component';

describe('ListBienImmobilierAAComponent', () => {
  let component: ListBienImmobilierAAComponent;
  let fixture: ComponentFixture<ListBienImmobilierAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBienImmobilierAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBienImmobilierAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
