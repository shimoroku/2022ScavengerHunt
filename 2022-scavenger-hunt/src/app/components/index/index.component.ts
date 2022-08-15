import { Component, OnInit } from '@angular/core';
import { CommandInfo } from 'src/app/models/CommandInfo';
import { CommandService } from 'src/app/services/commandService';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  private _command: string = '';
  private _currentCommandInfo: CommandInfo;

  get commandString()
  {
    return this._command;
  }

  get commandInfo()
  {
    return this._currentCommandInfo;
  }

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
  }

  sendCommand(command: string) {
    this._command = command;

    this._currentCommandInfo = this.commandService.GetCommandInfo(command);
  }

}
