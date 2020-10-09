function initAudio(){
	var audio, dir, ext, mynoteslist;
	dir = "audio/";
	ext = ".mp3";
	// Audio Object
	audio = new Audio();
	audio.src = dir+ext;

	var arr = document.getElementsByClassName("mynoteslist");
	for (var k=0; k<arr.length; k++){
	   arr[k].addEventListener("change", changeNote);
}



	// Functions
	function changeNote(event){
		audio.src = dir+event.target.value+ext;
	    audio.play();

	}



}
window.addEventListener("load", initAudio);
