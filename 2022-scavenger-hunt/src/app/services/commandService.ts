import { CommandInfo } from "../models/CommandInfo";

import * as _ from 'lodash';
import { SolutionType } from "../models/SolutionType";

export class CommandService {

    commandInfo: CommandInfo[] =  [
        {Key: 'video', Name: 'Test 1', Value: 100000, Clue: 'https://www.youtube.com/embed/W85oD8FEF78', SolutionType: SolutionType.Video},
        {Key: 'text', Name: 'Test 2', Value: 100000, Clue: '', SolutionType: SolutionType.Text},
        {Key: 'image', Name: 'Test 3', Value: 100000, Clue: '../../../assets/images/magic-word.gif', SolutionType: SolutionType.Image},
    ];

    constructor() {};

    GetCommandInfo(command: string)
    {
        const info = _.find(this.commandInfo, {Key: command})

        return info;
    }
}