import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeServiceService } from '../Service/home-service.service';

import { ScreenComponent } from './screen.component';

describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        CommonModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      MatIconModule],
      declarations: [ ScreenComponent ],
      providers:[HomeServiceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
