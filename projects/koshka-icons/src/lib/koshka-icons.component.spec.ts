import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoshkaIconsComponent } from './koshka-icons.component';

describe('KoshkaIconsComponent', () => {
  let component: KoshkaIconsComponent;
  let fixture: ComponentFixture<KoshkaIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoshkaIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KoshkaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
