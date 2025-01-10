import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalEneritzLangoyoComponent } from './final-eneritz-langoyo.component';

describe('FinalEneritzLangoyoComponent', () => {
  let component: FinalEneritzLangoyoComponent;
  let fixture: ComponentFixture<FinalEneritzLangoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalEneritzLangoyoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalEneritzLangoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
