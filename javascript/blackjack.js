let count = 0;
let answer = "";
function cc(card) {
  // Only change code below this line
if (card > 1 && card < 7){
  count++;
  answer = " Bet";
}
else if (card >= 7 && card <= 9) {
  answer = " Hold";
}
else if (card == 10,'J','Q','K','A') {
  count--;
  answer = " Hold";
}

console.log( count + answer);
count = 0;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');