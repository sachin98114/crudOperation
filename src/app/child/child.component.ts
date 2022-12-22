import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnChanges{
  @Input () value:  number|undefined;
  constructor() { }
  ngOnChanges(_changes: SimpleChanges): void {
  console.log(this.value)
  }
  ngOnInit(): void {
  }

}
