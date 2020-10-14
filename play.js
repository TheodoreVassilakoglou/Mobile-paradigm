
function PlayTune(num) {
    var chord = document.getElementById('chord'+num),
    ctrl = document.getElementById('audioControl'+num);
    // Update the Button
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    chord[method]();

    // Prevent Default Action
    return false;

}
