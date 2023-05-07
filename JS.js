var AllPointsT1 = 0
var AllPointsT2 = 0
var AllPointsT3 = 0
var AllPointsT4 = 0
var AllPointsT5 = 0
var AllPointsT6 = 0
var AllPointsT7 = 0
var AllPointsT8 = 0
var FinalPointsA = {};
//Group 1
//Game 1
var T1_G1 = document.getElementById("T1vT4_P T1")
var T2_G1 = document.getElementById("T2vT3_P T2")
var T3_G1 = document.getElementById("T2vT3_P T3")
var T4_G1 = document.getElementById("T1vT4_P T4")
//Game 2
var T1_G2 = document.getElementById("T1vT3_P T1")
var T2_G2 = document.getElementById("T2vT4_P T2")
var T3_G2 = document.getElementById("T1vT3_P T3")
var T4_G2 = document.getElementById("T2vT4_P T4")
// Game 3
var T1_G3 = document.getElementById("T1vT2_P T1")
var T2_G3 = document.getElementById("T1vT2_P T2")
var T3_G3 = document.getElementById("T3vT4_P T3")
var T4_G3 = document.getElementById("T3vT4_P T4")


T1_G1.addEventListener("change", calculate);
T4_G1.addEventListener("change", calculate);
T2_G1.addEventListener("change", calculate);
T3_G1.addEventListener("change", calculate);
T1_G2.addEventListener("change", calculate);
T3_G2.addEventListener("change", calculate);
T2_G2.addEventListener("change", calculate);
T4_G2.addEventListener("change", calculate);
T1_G3.addEventListener("change", calculate);
T2_G3.addEventListener("change", calculate);
T3_G3.addEventListener("change", calculate);
T4_G3.addEventListener("change", calculate);

//Group 2
//Game 1
var T5_G1 = document.getElementById("T5vT8_P T5")
var T6_G1 = document.getElementById("T6vT7_P T6")
var T7_G1 = document.getElementById("T6vT7_P T7")
var T8_G1 = document.getElementById("T5vT8_P T8")
//Game 2
var T5_G2 = document.getElementById("T5vT7_P T5")
var T6_G2 = document.getElementById("T6vT8_P T6")
var T7_G2 = document.getElementById("T5vT7_P T7")
var T8_G2 = document.getElementById("T6vT8_P T8")
//Game 3
var T5_G3 = document.getElementById("T5vT6_P T5")
var T6_G3 = document.getElementById("T5vT6_P T6")
var T7_G3 = document.getElementById("T7vT8_P T7")
var T8_G3 = document.getElementById("T7vT8_P T8")


T5_G1.addEventListener("change", calculate);
T6_G1.addEventListener("change", calculate);
T7_G1.addEventListener("change", calculate);
T8_G1.addEventListener("change", calculate);
T5_G2.addEventListener("change", calculate);
T6_G2.addEventListener("change", calculate);
T7_G2.addEventListener("change", calculate);
T8_G2.addEventListener("change", calculate);
T5_G3.addEventListener("change", calculate);
T6_G3.addEventListener("change", calculate);
T7_G3.addEventListener("change", calculate);
T8_G3.addEventListener("change", calculate);

function resetPoints () {
  FinalPointsA = {
    "T1": 0,
    "T2": 0,
    "T3": 0,
    "T4": 0,
    "T5": 0,
    "T6": 0,
    "T7": 0,
    "T8": 0,
  }
}

function addPoints(team, points) {
  FinalPointsA[team] = FinalPointsA[team] + points;
}

function checkGameResults(a, b, game) {
  if (window['T' + a + '_G' + game].value == "") {
    return;
  }
  if (window['T' + b + '_G' + game].value == "") {
    return;
  }
  
  if (window['T' + a + '_G' + game].value > window['T' + b + '_G' + game].value) {
    addPoints("T" + a, 3);
  } else if (window['T' + a + '_G' + game].value < window['T' + b + '_G' + game].value) {
    addPoints("T" + b, 3);
  } else if (window['T' + a + '_G' + game].value == window['T' + b + '_G' + game].value) {
    addPoints("T" + a, 1);
    addPoints("T" + b, 1);
  }
}

function addValuesToTable(){
  const fields = document.getElementsByClassName("data-field");

for (let i = 0; i < fields.length; i++) {
  const field = fields[i];
  console.log(field);
  field.innerHTML = FinalPointsA[field.dataset.name];
}
}
  
function calculate() {
  resetPoints();
  //Group 1
  // game 1: 1 vs 4
  checkGameResults(1, 4, 1);
  // game 1: 2 vs 3
  checkGameResults(2, 3, 1);
  // game 2: 1 vs 4
  checkGameResults(1, 3, 2);
  // game 2: 2 vs 3
  checkGameResults(2, 4, 2);
  // game 3: 1 vs 4
  checkGameResults(1, 2, 3);
  // game 3: 2 vs 3
  checkGameResults(3, 4, 3);
  
  //Group 2
  // game 1: 5 vs 8
  checkGameResults(5, 8, 1);
  // game 1: 6 vs 7
  checkGameResults(6, 7, 1);
  // game 2: 5 vs 7
  checkGameResults(5, 7, 2);
  // game 2: 6 vs 8
  checkGameResults(6, 8, 2);
  // game 3: 5 vs 6
  checkGameResults(5, 6, 3);
  // game 3: 7 vs 8
  checkGameResults(7, 8, 3);
  
  
  console.log(FinalPointsA);
  addValuesToTable();
}