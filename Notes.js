function initAudio(){
	var audio, dir, ext, mynoteslist;
	dir = "audio/";
	ext = ".mp3";
	// Audio Object
	audio = new Audio();
	audio.src = dir+"a3"+ext;
	audio.play();
	// Event Handling
	mynoteslist = document.getElementById("mynoteslist");
	mynoteslist.addEventListener("change", changeNote);
	// Functions
	function changeNote(event){
		audio.src = dir+event.target.value+ext;
	    audio.play();
	}
}
window.addEventListener("load", initAudio);
