const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

const GENRES = [
  'Cat Meowing',
  'Roaring',
  'Whispering',
  'Total Silence',
  'Snore',
  'Noise'
];
const FILE_PATH = path.join(__dirname, '/src/mocks/tracks.json');
const AMOUNT = 214;

generate();

function generate() {
  fs.writeFile(FILE_PATH, generateSongsJSON(AMOUNT), err => {
    if(err) {
      throw err;
    }

    console.log('Songs have been generated');
  });
}

function generateSongsJSON(amount) {
  if (Number.isNaN(amount) || amount < 1) {
    throw new Error('Invalid amount');
  }

  let songs = '[]';
  try {
    songs = JSON.stringify(generateSongs(amount));
  }
  catch(e) {
    throw e;
  }
  return songs;
}


function generateSongs(amount) {
  if (Number.isNaN(amount) || amount < 1) {
    throw new Error('Invalid amount');
  }

  const result = [];
  for (let i = 0; i < amount; i++) {
    const song = {
      "id": generateSongId(),
      "performer": generatePerfomerName(),
      "name": generateSongName(),
      "genre": generateGenre(),
      "year": generateYear(),
      "duration": generateDuration()
    };
    result.push(song);
  }

  return result;
}

function generateSongId() {
  return uuidv4();
}

function generatePerfomerName() {
  return `Unknown Artist ${getRandomNumberInInterval(1, 20)}`
}

function generateSongName() {
  return `Song ${getRandomNumberInInterval(1, 20)}`
}

function generateGenre() {
  return GENRES[getRandomNumberInInterval(0, GENRES.length - 1)];
}

function generateYear() {
  return getRandomNumberInInterval(1925, 2017);
}

function generateDuration() {
  return getRandomNumberInInterval(15 * 1000, 400 * 1000);
}


function getRandomNumberInInterval(min, max) {
  if (min >= max || Number.isNaN(min) || Number.isNaN(max)) {
    throw new Error(`Invalid interval:  ${min} ${max}`);
  }
  return Math.round(Math.random() * (max - min) + min);
}


