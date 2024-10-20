import {copyFileSync} from 'fs';

copyFileSync('database.json', `history/${getDateString()}.json`);

function getDateString(){
    const date = new Date();
    return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
}