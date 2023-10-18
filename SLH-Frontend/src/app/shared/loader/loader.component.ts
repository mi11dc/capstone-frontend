import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  template: `
  <div [ngClass]="isSpinnerVisible ? 'loaderOverlay':''"></div>
  <div class="load-bar" [class.hidden]="!isSpinnerVisible">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  `,
  styles: []
})
export class LoaderComponent implements OnInit, OnDestroy {
  
  public isSpinnerVisible = false;
  public subscription: Subscription;
  @Input() public backgroundColor = 'rgba(0, 115, 170, 0.69)';

  constructor(
    private loader: LoaderService
  ) { 
    
    this.subscription =  this.loader.loaderState.subscribe((response) => {
      this.isSpinnerVisible = response.show;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
