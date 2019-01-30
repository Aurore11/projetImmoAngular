import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleFormulaireComponent } from './modele-formulaire.component';

describe('ModeleFormulaireComponent', () => {
  let component: ModeleFormulaireComponent;
  let fixture: ComponentFixture<ModeleFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeleFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
