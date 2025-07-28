function golfScore() {
  const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!"
  ];
 
  const par = parseInt(document.getElementById("par").value);
  const strokes = parseInt(document.getElementById("strokes").value);
  const result = document.getElementById("result");
 
  if (!par || !strokes || par <= 0 || strokes <= 0) {
    result.textContent = "Please enter valid positive numbers.";
    return;
  }
 
  let score;
 
  if (strokes === 1) {
    score = names[0];
  } else if (strokes <= par - 2) {
    score = names[1];
  } else if (strokes === par - 1) {
    score = names[2];
  } else if (strokes === par) {
    score = names[3];
  } else if (strokes === par + 1) {
    score = names[4];
  } else if (strokes === par + 2) {
    score = names[5];
  } else {
    score = names[6];
  }
 
  result.textContent = `⛳ Result: ${score}`;
}
 
 