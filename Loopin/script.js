function whileLoop() {
  var w = prompt("Enter A Number");
  var i = 1;
  if (w % 2 == 0) {
    while (i < w) {
      console.log(i + "");
      i += 2;
    }
  } else {
    while (i <= w) {
      console.log(i + "");
      i += 2;
    }
  }

  alert("Check Console For Results");
}

function doWhileLoop() {
  var d = prompt("Enter A Number");
  var i = 1;
  if (d % 2 == 0) {
    do {
      console.log(i + "");
      i += 2;
    } while (i < d);
  } else {
    do {
      console.log(i + "");
      i += 2;
    } while (i <= d);
  }
  alert("Check Console For Results");
}
function forLoop() {
  var f = prompt("Enter A Number");
  if (f % 2 == 0) {
    for (var i = 1; i < f; i++) {
      console.log(i + "");
      i += 1;
    }
  } else {
    for (var i = 1; i <= f; i++) {
      console.log(i + "");
      i += 1;
    }
  }
  alert("Check Console For Results");
}
