

function init(containerNode) {
  var button = document.createElement("BUTTON");
  button.id = 'player1';
  button.innerText = "Add to Score";
  containerNode.appendChild(button);
  var score = document.createElement("P");
  score.innerText = 0;
  score.id = 'score';
  containerNode.appendChild(score);
}
