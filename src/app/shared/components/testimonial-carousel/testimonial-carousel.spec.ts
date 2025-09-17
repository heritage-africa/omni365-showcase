import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialCarousel } from './testimonial-carousel';

describe('TestimonialCarousel', () => {
  let component: TestimonialCarousel;
  let fixture: ComponentFixture<TestimonialCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
