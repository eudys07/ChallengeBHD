import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCommentsComponent } from './parent-comments.component';

describe('ParentCommentsComponent', () => {
  let component: ParentCommentsComponent;
  let fixture: ComponentFixture<ParentCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
