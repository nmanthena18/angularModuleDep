import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETimsServiceComponent } from './e-tims-service.component';

describe('ETimsServiceComponent', () => {
  let component: ETimsServiceComponent;
  let fixture: ComponentFixture<ETimsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETimsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ETimsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
