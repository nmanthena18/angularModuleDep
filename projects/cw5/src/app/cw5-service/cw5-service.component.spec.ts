import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cw5ServiceComponent } from './cw5-service.component';

describe('Cw5ServiceComponent', () => {
  let component: Cw5ServiceComponent;
  let fixture: ComponentFixture<Cw5ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cw5ServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cw5ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
