// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for this video: https://youtu.be/BAejnwN4Ccw

var cities = [];
var totalCities = prompt();
// let input, button;
var recordDistance;
var bestEver;

function setup() {
  createCanvas(400, 400);
//   input = createInput();
//   input.position(20, 65);
//  button = createButton('submit');
//   button.position(input.x + input.width, 65);
//   button.mousePressed();
//   totalCities = input.value();

var x = [1,13,56,256,25,390];
var y = [1,20,50,200,250,399];
// 
// var x = [];
// var y = [];
// x = prompt();
// y = prompt();
// console.log(x);
// console.log(y);
// totalCities = document.getElementById("nodes").value;
  console.log(totalCities);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(x[i],y[i]);
    cities[i] = v;
  }

  var d = calcDistance(cities);
  recordDistance = d;
  bestEver = cities.slice();
}



function draw() {
  background(0);
  fill(0);
  noStroke();
  textSize(12);
  text(`Best: ${floor(recordDistance)}`, 340, 10);

  fill(255);
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();

  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i, j);

  var d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}