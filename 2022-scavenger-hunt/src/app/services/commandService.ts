import { CommandInfo } from "../models/CommandInfo";

import * as _ from 'lodash';

export class CommandService {

    commandInfo: CommandInfo[] =  [{Key: 'test', Name: 'Test 1', Value: 100000}];

    constructor() {};

    GetCommandInfo(command: string)
    {
        const info = _.find(this.commandInfo, {Key: command})

        return info;
    }
}