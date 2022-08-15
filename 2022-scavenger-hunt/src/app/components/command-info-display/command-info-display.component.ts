import { Component, Input, OnInit } from '@angular/core';
import { CommandInfo } from 'src/app/models/CommandInfo';

@Component({
  selector: 'app-command-info-display',
  templateUrl: './command-info-display.component.html',
  styleUrls: ['./command-info-display.component.scss']
})
export class CommandInfoDisplayComponent implements OnInit {

  @Input()
  commandInfo: CommandInfo;

  get CommandInfo()
  {
    return this.commandInfo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
