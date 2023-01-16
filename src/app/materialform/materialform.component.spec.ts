import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialformComponent } from './materialform.component';

describe('MaterialformComponent', () => {
  let component: MaterialformComponent;
  let fixture: ComponentFixture<MaterialformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
