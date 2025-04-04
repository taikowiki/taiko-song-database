import { writeFileSync } from 'fs';

const songData = await (await fetch('https://taiko.wiki/api/song')).json();
const json = JSON.stringify(songData, null, 2);

writeFileSync('database.json', json, 'utf-8');

export {};