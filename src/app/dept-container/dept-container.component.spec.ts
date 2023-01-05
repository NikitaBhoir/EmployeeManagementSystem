import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptContainerComponent } from './dept-container.component';

describe('DeptContainerComponent', () => {
  let component: DeptContainerComponent;
  let fixture: ComponentFixture<DeptContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
