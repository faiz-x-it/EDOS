//document vars
var item = {
	WiFi:document.getElementById("fs-wifi"),
	Bluethoot:document.getElementById("fs-bluetooth"),
	GPS:document.getElementById("fs-gps"),
	Fullscreen:document.getElementById("fs-fullscreen"),
	SdCard:document.getElementById("fs-sdcard"),
	Fullscreen_enabled:1
}
//set fullscreen
function fullscreen(event) {
	if (item.Fullscreen_enabled == 1 || event.keyCode == 122) {
		item.Fullscreen.src = "/HTML-OS/@APP/htmlos.system.ui/icons/fullscreen-disabled.png";
		event.keyCode = 122;
		item.Fullscreen_enabled++;
	} else if (item.Fullscreen_enabled == 2 || event.keyCode == 122) {
		item.Fullscreen.src = "/HTML-OS/@APP/htmlos.system.ui/icons/fullscreen-enabled.png";
		event.keyCode = 122;
		item.Fullscreen_enabled = 1;
	}
};