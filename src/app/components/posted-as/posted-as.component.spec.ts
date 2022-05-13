import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedAsComponent } from './posted-as.component';

describe('PostedAsComponent', () => {
  let component: PostedAsComponent;
  let fixture: ComponentFixture<PostedAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
