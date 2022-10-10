import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  @Input() data: any
  @Output() itemDeleted = new EventEmitter<{index: number}>();


  constructor() { }

  ngOnInit(): void {
    console.warn(this.data)

  }
  onDeleteItem() {
    this.itemDeleted.emit() 
  }

}
