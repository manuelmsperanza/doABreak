import * as fs from 'fs';


var content = {
    action: (process.argv.slice(2)[0]),
    timestamp: new Date()
}

fs.writeFileSync(process.env.HOME + '\\doABreak.json', JSON.stringify(content));