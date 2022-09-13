import { CommandInfo } from "../models/CommandInfo";

import * as _ from 'lodash';
import { SolutionType } from "../models/SolutionType";

export class CommandService {

    default: CommandInfo = {Key: 'image', Name: 'You didn\'t say the magic word!', Clue: './assets/images/magic-word.gif', SolutionType: SolutionType.Puzzle};

    commandInfo: CommandInfo[] =  [
        {Key: 'video', Name: 'Test 1', Clue: 'https://www.youtube.com/embed/jkYUxmMOeok', SolutionType: SolutionType.Video},
        {Key: 'text', Name: 'Test 2', Clue: '', SolutionType: SolutionType.Text},
        {Key: 'nature', Name: '20-second video of something in its natural habitat - narrated like a nature show', Clue: 'https://www.youtube.com/embed/jkYUxmMOeok', SolutionType: SolutionType.Activity},
        {Key: 'layers', Name: 'Put on as many layers as you can in 20 seconds', Clue: 'https://www.youtube.com/embed/VJ5ciblNT1A', SolutionType: SolutionType.Activity},
        {Key: 'trick', Name: 'Trick shot - paper in trash can (must prove it\'s happenning "live")', Clue: 'https://www.youtube.com/embed/9phj2okgWDI', SolutionType: SolutionType.Activity},
        {Key: 'pterodactyl', Name: 'Say pterodactyl 10 times in a row without showing your teeth or laughing (start over if you do)', Clue: 'https://www.youtube.com/embed/zy9r7EBeCco', SolutionType: SolutionType.Activity},
        {Key: 'hobby', Name: 'Show and tell using objects representing your hobbies, favorites, or fun facts', Clue: 'https://www.youtube.com/embed/JhR9Yq9nMiI', SolutionType: SolutionType.Activity},
        {Key: 'walk', Name: 'Do your best dinosaur walk and roar!', Clue: 'https://www.youtube.com/embed/QCNnRmTxjK0', SolutionType: SolutionType.Activity},
        {Key: 'ripple', Name: 'Film the famous "water cup ripple" like in the original Jurassic park', Clue: 'https://www.youtube.com/embed/yBhv88tcCEk', SolutionType: SolutionType.Activity},
        {Key: 'quote', Name: 'Go outdoors and quote your favorite line from one of the Jurassic Park films (bonus points if you act out a whole scene)', Clue: 'https://www.youtube.com/embed/NngII-EueTw', SolutionType: SolutionType.Activity},
        {Key: 'maestro', Name: 'Put on a show.', Clue: './assets/images/pig.jpg', SolutionType: SolutionType.Puzzle},
        {Key: 'metro', Name: 'Domo arigato', Clue: './assets/images/bot.jpg', SolutionType: SolutionType.Puzzle},
        {Key: 'arnolds', Name: 'Some of the food in Cincinnati', Clue: './assets/images/arnolds.jpg', SolutionType: SolutionType.Puzzle},
        {Key: 'tokyo', Name: 'Scaramouch, Scaramouch, will you do the Fandango!', Clue: './assets/images/kitty.jpg', SolutionType: SolutionType.Puzzle},
        {Key: 'alley', Name: 'Why is this so hidden?', Clue: './assets/images/omalleys.jpg', SolutionType: SolutionType.Puzzle},
        {Key: 'chili', Name: 'Some say the sky is the limit for this chili...', Clue: './assets/images/skyline.jpg', SolutionType: SolutionType.Puzzle},
        {Key: 'brady', Name: 'Jammin\' at the new music center', Clue: './assets/images/brady.jpg', SolutionType: SolutionType.Puzzle},
        {Key: 'paddle', Name: 'I Wheelie didn\'t think you would get this one.', Clue: './assets/images/paddle.jpg', SolutionType: SolutionType.Puzzle},
        {Key: 'honest', Name: 'I cannot tell a lie... unless that is a lie...', Clue: './assets/images/abe.jpg', SolutionType: SolutionType.Puzzle},
    ];

    constructor() {};

    GetCommandInfo(command: string)
    {
        const info = _.find(this.commandInfo, {Key: command})

        if (info === undefined)
        {
            return this.default;
        }

        return info;
    }
}