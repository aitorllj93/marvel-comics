import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsDetailComponent } from './comics-detail.component';

describe('ComicsDetailComponent', () => {
  let component: ComicsDetailComponent;
  let fixture: ComponentFixture<ComicsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
