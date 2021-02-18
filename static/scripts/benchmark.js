if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame;
}

var seconds = (new Date().getTime() / 1000) + 2.5;

var t = [];
function animate(now) {
    t.unshift(now);
    if (t.length > 10) {
        var t0 = t.pop();
        var fps = Math.floor(1000 * 10 / (now - t0));
		$('#fps').text('Current FPS: ' + fps);
    }

	if (new Date().getTime() / 1000 > seconds) {
		document.cookie = fps;
		window.location.replace("https://music.replit.sh/player");
	}

    window.requestAnimationFrame(animate);
};

window.requestAnimationFrame(animate);
