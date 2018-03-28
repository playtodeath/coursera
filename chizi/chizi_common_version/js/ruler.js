
// Get device info.
// Only support iphones.
var cm_common_rule = "border-left: 0.5px solid black;float: left;";
var IPHONE_6 = "iphone_6";
var deviceFunction = {
	"2560x1600": macPro,
	"750x1334": iphone6Ruler,

}

deviceCall()

function deviceCall() {
	var ratio = window.devicePixelRatio;
	var width = ratio * window.screen.width;
	var height = ratio * window.screen.height;
	var resolutionRatio = width + 'x' + height;
	deviceFunction[resolutionRatio]();
	// alert(resolutionRatio);
	// alert(deviceFunction[resolutionRatio])
}

function appendCSSToHead(cssrule) {
	$("<style type='text/css'> " + cssrule + "</style>").appendTo("head");
}

function getLineStyle(line_width) {
	var rule1 = "width: " + line_width + "px;";
	var rule2 = "border-bottom: 1px solid black;";
	var cssrule = ".line {" + rule1 + rule2 + "}";
	appendCSSToHead(cssrule);
}

function getmmStyle(ppc) {
	var width = ppc/10.0 - 0.5;
	var rule1 = "width: " + width + "px;";
	var rule2 = "height: 10px";
	var cssrule = ".mm {" + cm_common_rule + rule1 + rule2 + "}";
	appendCSSToHead(cssrule);
}

function getMidcmStyle(ppc) {
	var width = ppc/10.0 - 0.5;
	var rule1 = "width: " + width + "px;";
	var rule2 = "height: 20px";
	var cssrule = ".mid_cm {" + cm_common_rule + rule1 + rule2 + "}";
	appendCSSToHead(cssrule);
}

function getcmStyle(ppc) {
	var width = ppc/10.0 - 0.5;
	var rule1 = "width: " + width + "px;";
	var rule2 = "height: 40px";
	var cssrule = ".cm {" + cm_common_rule + rule1 + rule2 + "}";
	appendCSSToHead(cssrule);
}

function getPlaceHolderStyle(ppc) {
	var cssrule = ".place_holder {\
					clear: both;width: 1000px;\
					height: 1px;border-bottom: 1px solid white;\
				    }";
	appendCSSToHead(cssrule);
}

function getRulerNumStyle(ppc) {
	var rule1 = "height: 20px;\
				float: left;\
				text-align: center;\
				";
	var rule2 = "width: " + ppc + "px;"
	var cssrule = ".num {" + rule1 + rule2 + "}"
	appendCSSToHead(cssrule);
}

function rulerPPC(ppc) {
	var width = window.screen.width;
	var height = window.screen.height;
	var line_size_in_cm = Math.floor(width/ppc);
	line_width = ppc * line_size_in_cm;

	// see https://stackoverflow.com/questions/1212500/create-a-css-rule-class-with-jquery-at-runtime
	lineStyle = getLineStyle(line_width);
	mmStyle = getmmStyle(ppc);
	midcmStyle = getMidcmStyle(ppc);
	cmStyle = getcmStyle(ppc);
	placeHolderStyle = getPlaceHolderStyle(ppc);
	rulerNumStyle = getRulerNumStyle(ppc);

	$('body').append("<div class = 'line'></div>");

	var c = document.createDocumentFragment();
	var d = document.createDocumentFragment();
	for (let i=0; i<line_size_in_cm; i++) {
		console.log(i)
		let cm = document.createElement("div");
		cm.className = "cm";
		c.appendChild(cm);

		for (let i=0; i<4; i++) {
			let mm = document.createElement("div");
			mm.className = "mm";
			c.appendChild(mm);
		}

		let mid_cm = document.createElement("div");
		mid_cm.className = "mid_cm";
		c.appendChild(mid_cm);

		for (let i=0; i<4; i++) {
			let mm = document.createElement("div");
			mm.className = "mm";
			c.appendChild(mm);
		}

		// create number.
		let n = document.createElement("div");
		n.className = "num";
		n.textContent = '' + (i + 1);
		d.appendChild(n);
	}
	let cm = document.createElement("div");
	cm.className = "cm";
	c.appendChild(cm);

	let place_holder = document.createElement("div");
	place_holder.className = "place_holder";

	document.body.appendChild(c);
	document.body.appendChild(place_holder);
	document.body.appendChild(d);
}

function rulerCommon(size, width, height) {
	rulerPPC(0);
}

function macPro() {
	rulerPPC(44.6816938348546);
}

function iphone6Ruler() {
	rulerPPC(64.0969061463419);
}

// OLD CODE
// function iphone6Ruler(argument) {
// 	rulerPPC(64.46);
// 	return;
// 	// 1cm = 128pixels.
// 	// iphme ratio is 2.
// 	// so 1cm = 64pixels

// 	// append the straight line.
// 	var line_size = 5; // 5cm
// 	$('body').append("<div class = 'iphone6Ruler_line'> </div>");

// 	// append the vertical scale
// 	// due to the size of the straight line.
// 	// var i = 0;
// 	// while(i < xxx) {
// 	// 	i = i + 1;
// 	// 	$('body').append("<div class = 'iphone6Ruler_cm'> </div>");
// 	// 	for (var i = 3; i >= 0; i--) {
// 	// 		$('body').append("<div class = 'iphone6Ruler_mm'> </div>");
// 	// 	}
// 	// 	$('body').append("<div class = 'iphone6Ruler_mid_cm'> </div>");
// 	// 	for (var i = 3; i >= 0; i--) {
// 	// 		$('body').append("<div class = 'iphone6Ruler_mm'> </div>");
// 	// 	}
// 	// }

// 	var c = document.createDocumentFragment();
// 	var d = document.createDocumentFragment();
// 	for (let i=0; i<line_size; i++) {
// 		console.log(i)
// 		let cm = document.createElement("div");
// 		cm.className = "iphone6Ruler_cm";
// 		c.appendChild(cm);

// 		for (let i=0; i<4; i++) {
// 			let mm = document.createElement("div");
// 			mm.className = "iphone6Ruler_mm";
// 			c.appendChild(mm);
// 		}

// 		let mid_cm = document.createElement("div");
// 		mid_cm.className = "iphone6Ruler_mid_cm";
// 		c.appendChild(mid_cm);

// 		for (let i=0; i<4; i++) {
// 			let mm = document.createElement("div");
// 			mm.className = "iphone6Ruler_mm";
// 			c.appendChild(mm);
// 		}

// 		// create number.
// 		let n = document.createElement("div");
// 		n.className = "iphone6Ruler_num";
// 		n.textContent = '' + (i + 1);
// 		d.appendChild(n);
// 	}
// 	let cm = document.createElement("div");
// 	cm.className = "iphone6Ruler_cm";
// 	c.appendChild(cm);

// 	let place_holder = document.createElement("div");
// 	place_holder.className = "place_holder";

// 	document.body.appendChild(c);
// 	document.body.appendChild(place_holder);
// 	document.body.appendChild(d);

// 	// append the number
// }






