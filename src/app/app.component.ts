import { Component } from '@angular/core';

//controls a patch of screen(presenter)
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
