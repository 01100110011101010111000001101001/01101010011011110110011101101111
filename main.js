var answers = [
  'girafa'
];

var input = document.getElementById('answer');

input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      answer();
  }
});

function answer() {
  var guess = input.value;
  loadlvl(answers.indexOf(guess));
}

function loadlvl(which) {
  var title = '';
  var puzzle = '';
  switch (which) {
    case 0:
      title = 'nível 2'
      puzzle = '<p>Parabéns você ganhou!!!!!!!</p>'
      break;
  
    default:
      alert('errou');
      return;
  }
  document.getElementById('title').getElementsByTagName('p')[0].textContent = title;
  document.getElementById('puzzle').innerHTML = puzzle;
}