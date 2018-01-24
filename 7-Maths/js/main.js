let min = [ 7, 5, -12, 6, 32, 18, 14, -2];
myArrayMin(min);

function myArrayMin(min){
  document.write (Math.min.apply(null, min), "<br/>");
}
let max = [ -3, 9, 21, 36, 27, 54, 17, 35];
myArrayMax(max);

function myArrayMax(min){
  document.write (Math.max.apply(null, max));
}
