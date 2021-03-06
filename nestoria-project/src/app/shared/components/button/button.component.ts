import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

@Input() label: string = 'Test text';

@Input() disabled: boolean = false;

@Input() background: string = "";

@Input("text-color") myColor: string ;

@Input() width: string = '';

@Input() height: string = '';

@Input("id") buttonId: string;

ngOnInit(): void {
}

public clickEvent(e: MouseEvent) {
  if (!this.disabled) {
    console.log("click worked")
  }
}

}

