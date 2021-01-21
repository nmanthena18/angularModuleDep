import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyalretLibComponent } from './myalret-lib.component';

describe('MyalretLibComponent', () => {
  let component: MyalretLibComponent;
  let fixture: ComponentFixture<MyalretLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyalretLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyalretLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
