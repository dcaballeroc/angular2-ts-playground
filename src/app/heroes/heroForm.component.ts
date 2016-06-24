import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { HeroForm } from '../shared';

@Component({
  selector: 'ngp-hero-form',
  template: '<p>Nothing</p>',
})
export class HeroFormComponent {
  powers = ['Really smart', 'Super flexible', 'Super hot', 'Weather changer'];
  model = new HeroForm(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  
  onSubmit() {
    this.submitted = true;
  }
  
  get diagnostics() {
    return JSON.stringify(this.model);
  }
}
