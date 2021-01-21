import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cw5AboutComponent } from './cw5-about.component';

describe('Cw5AboutComponent', () => {
  let component: Cw5AboutComponent;
  let fixture: ComponentFixture<Cw5AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cw5AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cw5AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
