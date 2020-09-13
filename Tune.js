//Code based of Coding train found here: https://www.youtube.com/watch?v=F1OkDTUkKFo&ab_channel=TheCodingTrain//

const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

let pitch;
let audioContext;
let mic;
let freq = 0;

let notes = [
  {note:'E', freq:329.63},
  {note:'B', freq:246.94},
  {note:'G', freq:196.00},
  {note:'D', freq:146.83},
  {note:'A', freq:110.00},
  {note:'E', freq:82.63}
];

function setup() {
  createCanvas(400, 400);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}

function listening() {
  console.log('listening for audio');
  pitch = ml5.pitchDetection(
    model_url,
    audioContext,
    mic.stream,
    modelLoaded);
}


function gotPitch(error, frequency) {
  if (error) {
    console.error(error);
  } else {
    if (frequency) {
      freq = frequency;
    }
  }
  pitch.getPitch(gotPitch)
}

function modelLoaded() {
  console.log('this model has been succesfully loaded');
  pitch.getPitch(gotPitch);
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(32);
  text(freq.toFixed(2), width / 2, height - 150);

let closestNote = -1;
let recordDiff = Infinity;
for (let i = 0; i < notes.length; i++) {
  let diff = freq - notes[i].freq;
  if (abs(diff) < abs(recordDiff)) {
    closestNote = notes[i];
    recordDiff = diff;
  }
}




textSize(65);
text(closestNote.note, width/2, height - 50);



let diff = recordDiff;

/*
let amt = map(diff, -100, 100, 0 , 1);
let r = colour(255, 0, 0);
let g = colour(0, 255, 0)
let col = lerpColor(g,r,amt)*/

let alpha = map(abs(diff),0 ,100 ,255 ,0);
rectMode(CENTER);
fill(255, alpha);
stroke(255);
strokeWeight(1);
if (abs(diff) < 1 ) {
  fill(0,255,0);
}
rect(200, 100, 200, 50);

stroke(255);
strokeWeight(4);
line(200,0,200, 200);

noStroke();
fill(255, 0, 0);
if (abs(diff) < 1 ) {
  fill(0, 255, 0);

}

rect(200 + diff / 2, 100, 10, 75);

}
