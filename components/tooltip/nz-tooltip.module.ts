import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzAddOnModule } from '../core/addon/addon.module';
// NOTE: the `t` is not uppercase in directive. Change this would however introduce break change.
import { NzToolTipComponent } from './nz-tooltip.component';
import { NzTooltipDirective } from './nz-tooltip.directive';

@NgModule({
  declarations   : [ NzToolTipComponent, NzTooltipDirective ],
  exports        : [ NzToolTipComponent, NzTooltipDirective ],
  imports        : [ CommonModule, OverlayModule, NzAddOnModule ],
  entryComponents: [ NzToolTipComponent ]
})
export class NzToolTipModule {
}
