import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanCornelisComponent } from './jan-cornelis.component';

describe('JanCornelisComponent', () => {
  let component: JanCornelisComponent;
  let fixture: ComponentFixture<JanCornelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanCornelisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JanCornelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
