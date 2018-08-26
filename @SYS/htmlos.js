//document vars
var settings = {
	fastsettings: {
		enabled: 1,
	}
};
var desktop_item = document.getElementsByClassName("item");
var fastsettings_popup = document.getElementById("fastsettingspopup");
//fastsettings_popup.style.visibility = "hidden";

//DesktopItem worker
desktop_item.onmousedown = new function() {
	document.getElementById('trash').style.backgroundColor = 'rgba(0,74,255,0.7)';
};
desktop_item.onmouseup = new function() {
	document.getElementById('trash').style.backgroundColor = 'rgba(0,74,255,0.0)';
};
desktop_item.ontouchstart = new function() {
	document.getElementById('trash').style.backgroundColor = 'rgba(0,74,255,0.7)';
};
desktop_item.ontouchend = new function() {
	document.getElementById('trash').style.backgroundColor = 'rgba(0,74,255,0.0)';
};
fastsettings_popup.style.visibility = "hidden";

//FastSettings ToolBar Button
function fastsettings() {
	var fastsettings = document.getElementById("fastsettings");
	if (settings.fastsettings.enabled == 1) {
		fastsettings_popup.style.visibility = "hidden";
		fastsettings.src = "/HTML-OS/@APP/htmlos.system.ui/icons/fastsettings-disabled.png";
		settings.fastsettings.enabled++;
	} else if (settings.fastsettings.enabled == 2) {
		fastsettings_popup.style.visibility = "visible";
		fastsettings.src = "/HTML-OS/@APP/htmlos.system.ui/icons/fastsettings-enabled.png";
		settings.fastsettings.enabled = 1;
	}
}