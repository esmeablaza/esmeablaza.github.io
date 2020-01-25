function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  background(255);
  noStroke();
  
  // hour
  fill(255, 204, 0);
  let h = hour();
  map(circle(h, h, 100), 0, 100, 0, width);
  
  // minute 
  fill('rgba(0,255,0, 0.25)');
  let m = minute();
  map(circle(m, m, 50), 0, 100, 0, width);
  
  // second 
  fill('rgba(100%,0%,100%,0.5)');
  let s = second();
  map(circle(s, s, 15), 0, 100, 0, width); 
  
}
  
