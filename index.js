
function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = []
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(facts) {
  var factsArray = []
  var i = 0;
  while (i < facts.length) {
      factsArray.push(`${facts[i]}!!!`)
      i++;
  }
  return factsArray
}
