import { LightningElement, api } from 'lwc';
import { FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class AutoAdvanceScreenFlowWithProgressBar extends LightningElement {
   @api progressLabel;
   @api waitTime

   @api
   renderedCallback() {
       const nextNavigationEvent = new FlowNavigationNextEvent();
       window.setTimeout(() => { this.dispatchEvent(nextNavigationEvent);;}, this.waitTime);

   }

}