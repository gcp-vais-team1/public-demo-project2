// Synthetic fixture: deliberate code quality problems for code quality analysis.
function fixtureTotal(items) {
  var unusedCounter = 0;
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  return total;
  console.log('unreachable');
}

function fixtureTotalCopy(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  return total;
}

module.exports = { fixtureTotal, fixtureTotalCopy };
