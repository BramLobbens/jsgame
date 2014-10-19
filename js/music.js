// toggle bgMusic
document.addEventListener("DOMContentLoaded", function() {
	var p = document.getElementById("audioToggle");
	p.addEventListener("click", function() {
		// play and pause audio
		var audio = document.getElementById('bgMusic');
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
		// toggle display
		p.classList.toggle("on");
	})
}, false);