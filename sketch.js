function setup() {
	createCanvas(600, 200);
	background(70, 70, 70);
	rectMode(CENTER);
	for(var i = -5; i < 6; i++){
		rect(width/2 + i*25, height/2 + 50, 20, 20);
	}
	textSize(80);
	textAlign(CENTER);
	fill(255);
	text("Hello Git!", width/2, height/2);
}