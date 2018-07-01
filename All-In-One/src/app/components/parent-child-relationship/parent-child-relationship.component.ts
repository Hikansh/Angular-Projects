import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-relationship',
  template: `
  <div class="container text-center">
    <h3>This is the parent component</h3>
    <p class="display-3">Should we use poly bags?</p>
    Agree:{{agreed}}<br>Disagree:{{disagreed}}
    <app-child *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)">
      </app-child>
      </div>
  `,
  styles: []
})
export class ParentChildRelationshipComponent implements OnInit {

  agreed=0;
  disagreed=0;
  voters=['person one','person two','person three'];

  constructor() { }

  ngOnInit() {
  }

  onVoted(agreed:boolean){
    agreed?this.agreed++:this.disagreed++;
  }

}
