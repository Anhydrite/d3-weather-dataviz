


function getBlueToRed(percent) {
	let b = 255,
		r = 0;
	b -= percent * 2.5;
	r += percent * 5;
	b -= r;
	return 'rgb(' + r + ',' + 0 + ',' + b + ')';
}

function mouseover(element) {
	Tooltip.style("display", "inline")
		.text(element.n)
}

function mousemove() {
	Tooltip.style("left", (d3.event.pageX - 34) + "px")
		.style("top", (d3.event.pageY - 12) + "px");
}

function mouseout() {
	Tooltip.style("display", "none");
}