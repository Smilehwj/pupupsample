import { Component, Injector } from '@angular/core';
import { NgElementConstructor, createCustomElement } from '@angular/elements';
import { PopupService } from './popup/popup.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  template: `
    <input #input value="Message">
    <button (click)="popup.showAsComponent(input.value)">
        Show as component </button>
    <button (click)="popup.showAsElement(input.value)">
        Show as element </button>
  `
})

export class AppComponent {
  constructor(private injector: Injector, public popup: PopupService) {
    // on init, convert PopupComponent to a custom element
    const PopupElement = createCustomElement(PopupComponent, { injector: this.injector });
    // register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
