import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistarComponent } from './llistar.component';

describe('LlistarComponent', () => {
  let component: LlistarComponent;
  let fixture: ComponentFixture<LlistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
