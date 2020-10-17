//Code based of Coding train found here: https://www.youtube.com/watch?v=F1OkDTUkKFo&ab_channel=TheCodingTrain//

const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

let pitch;
let audioContext;
let mic;
let freq = 0;


let notes = [

  {note:'C0', freq:16.35},
  {note:'c#0', freq:17.32},
  {note:'D0', freq:18.35},
  {note:'D#0', freq:19.45},
  {note:'E0', freq:20.60},
  {note:'F0', freq:21.83},
  {note:'F#0', freq:23.12},
  {note:'G0', freq:24.50},
  {note:'G#0', freq:25.96},
  {note:'A0', freq:27.50},
  {note:'A#0', freq:29.14},
  {note:'B0', freq:30.87},

  {note:'C1', freq:32.70},
  {note:'C#1', freq:34.65},
  {note:'D1', freq:36.71},
  {note:'D#1', freq:38.89},
  {note:'E1', freq:41.20},
  {note:'F1', freq:43.65},
  {note:'F#1', freq:46.25},
  {note:'G1', freq:49.00},
  {note:'G#1', freq:51.91},
  {note:'A1', freq:55.00},
  {note:'A#1', freq:58.27},
  {note:'B1', freq:61.74},


  {note:'C2', freq:65.41},
  {note:'C#2', freq:69.30},
  {note:'D2', freq:73.42},
  {note:'D#2', freq:77.78},
  {note:'E2', freq:82.41},
  {note:'F2', freq:87.31},
  {note:'F#2', freq:92.50},
  {note:'G', freq:98.00},
  {note:'G#2', freq:103.83},
  {note:'A2', freq:110.00},
  {note:'A#2', freq:116.54},
  {note:'B2', freq:123.47},

  {note:'C3', freq:130.81},
  {note:'C#3', freq:138.59},
  {note:'D3', freq:146.83},
  {note:'D#3', freq:155.56},
  {note:'E3', freq:164.81},
  {note:'F3', freq:174.61},
  {note:'F#3', freq:185.00},
  {note:'G3', freq:196.00},
  {note:'G#3', freq:207.65},
  {note:'A3', freq:220.00},
  {note:'A#3', freq:233.08},
  {note:'B3', freq:246.94},


  {note:'C4', freq:261.63},
  {note:'C#4', freq:277.18},
  {note:'D4', freq:293.66},
  {note:'D#4', freq:311.13},
  {note:'E4', freq:329.63},
  {note:'F4', freq:349.23},
  {note:'F#4', freq:369.99},
  {note:'G4', freq:392.00},
  {note:'G#4', freq:415.30},
  {note:'A4', freq:440.00},
  {note:'A#4', freq:466.16},
  {note:'B4', freq:493.88},

  {note:'C5', freq:523.25},
  {note:'C#5', freq:554.37},
  {note:'D5', freq:587.33},
  {note:'D#5', freq:622.25},
  {note:'E5', freq:659.25},
  {note:'F5', freq:698.46},
  {note:'F#5', freq:739.99},
  {note:'G5', freq:783.99},
  {note:'G#5', freq:830.61},
  {note:'A5', freq:880.00},
  {note:'A#5', freq:932.22},
  {note:'B5', freq:987.77},

  {note:'C6', freq:1046.50},
  {note:'C#6', freq:1108.73},
  {note:'D6', freq:1174.66},
  {note:'D#6', freq:1244.51},
  {note:'E6', freq:1318.51},
  {note:'F6', freq:1396.91},
  {note:'F#6', freq:1479.98},
  {note:'G6', freq:1567.98},
  {note:'G#', freq:1661.22},
  {note:'A6', freq:1750.00},
  {note:'A#6', freq:1864.66},
  {note:'B6', freq:1975.53},

  {note:'C7', freq:2093.00},
  {note:'C#7', freq:2217.46},
  {note:'D7', freq:2349.32},
  {note:'D#7', freq:2489.02},
  {note:'E7', freq:2637.02},
  {note:'F7', freq:2793.83},
  {note:'F#7', freq:2959.96},
  {note:'G7', freq:3135.96},
  {note:'G#7', freq:3322.44},
  {note:'A7', freq:3520.00},
  {note:'A#7', freq:3729.00},
  {note:'B7', freq:3951.07},

  {note:'C8', freq:4186.01},
  {note:'C#8', freq:4434.92},
  {note:'D8', freq:4798.63},
  {note:'D#8', freq:4978.03},
  {note:'E8', freq:5274.04},
  {note:'F8', freq:5587.65},
  {note:'F#8', freq:5919.91},
  {note:'G8', freq:6271.93},
  {note:'g#8', freq:6644.88},
  {note:'A8', freq:7040.00},
  {note:'A#8', freq:7458.62},
  {note:'B8', freq:7902.13},
];





function setup() {


  createCanvas(windowWidth, windowHeight-170);
  audioContext = getAudioContext();
  if (getAudioContext().state !== 'running') {
}
  mic = new p5.AudioIn();
  mic.start(listening);
}



function mouseClicked(){
   if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight-170);
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
  background(48,48,50);
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

textSize(32);
text("Tap to play", width/4, 20);



let diff = recordDiff;


let alpha = map(abs(diff),0 ,100 ,255 ,0);
rectMode(CENTER);
fill(255, alpha);
stroke(255);
strokeWeight(1);
if (abs(diff) < 0.5 ) {
  fill(0,255,0);
}

rect(windowWidth/2, 100, 200, 50);

stroke(255);
strokeWeight(4);
line(windowWidth/2,0,windowWidth/2,300);

noStroke();
fill(255, 0, 0);
if (abs(diff) < 0.5 ) {
  fill(0, 255, 0);

}

rect(windowWidth/2 + diff / 0.1, 100, 10, 75);


}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
