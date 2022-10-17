import * as fs from 'fs';

var action: string = process.argv.slice(2)[0];
var content: object = {};

if (action === 'check') {

    var data = fs.readFileSync(process.env.HOME + '\\doABreak.json', 'utf8');
    content = JSON.parse(data);
    var lastAction = content['action'];
    if (lastAction === 'workstationLock') {
        process.exit(-1);
    } else {
        var maxElapsed: number = parseInt(process.argv.slice(3)[0]);
        var timeDiff: number = Date.now() - Date.parse(content['timestamp']);
        if (timeDiff < (maxElapsed * 60000)) {
            process.exit(-1);
        } else {
            process.exit(0);
        }
    }
    
} else {

    content = {
        action: action,
        timestamp: new Date()
    }

    fs.writeFileSync(process.env.HOME + '\\doABreak.json', JSON.stringify(content));
}