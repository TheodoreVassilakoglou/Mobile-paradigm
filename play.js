var chord = document.getElementById('chord'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {

    // Update the Button
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    chord[method]();

    // Prevent Default Action
    return false;
};



var chord1 = document.getElementById('chord1'),
    ctrl1 = document.getElementById('audioControl1');

ctrl1.onclick = function () {

    var pause = ctrl1.innerHTML === 'pause!';
    ctrl1.innerHTML = pause ? 'play!' : 'pause!';

    var method = pause ? 'pause' : 'play';
    chord1[method]();

    return false;
};

var chord2 = document.getElementById('chord2'),
    ctrl2 = document.getElementById('audioControl2');

ctrl2.onclick = function () {

    var pause = ctrl2.innerHTML === 'pause!';
    ctrl2.innerHTML = pause ? 'play!' : 'pause!';

    var method = pause ? 'pause' : 'play';
    chord2[method]();

    return false;
};


var chord3 = document.getElementById('chord3'),
    ctrl3 = document.getElementById('audioControl3');

ctrl3.onclick = function () {

    var pause = ctrl3.innerHTML === 'pause!';
    ctrl3.innerHTML = pause ? 'play!' : 'pause!';

    var method = pause ? 'pause' : 'play';
    chord3[method]();

    return false;
};
