function f() {
  alert('hello');
}



f(1);

f();

f(1,2,3);

f();

f(1);


function t(x) {
  var y = x;
  if (x < 1)
    y = 1;
  if (x < 2)
    y = 2;
  if (x < 3)
    y = 3;

  if (x < 4) {
    y = 4;
  } else {
    y = 5;
  }
  alert(y);
}
