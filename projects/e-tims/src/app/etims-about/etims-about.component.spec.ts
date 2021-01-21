import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtimsAboutComponent } from './etims-about.component';

describe('EtimsAboutComponent', () => {
  let component: EtimsAboutComponent;
  let fixture: ComponentFixture<EtimsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtimsAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtimsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
