function muLtipier(factor){
    return number => number * factor
} 
let twice = muLtipier(3);
console.log(twice(5))
function pivo (a, b){
    if(a<b){
        console.log(a)
    }else{
        console.log(b)
    }
}
pivo(9, 5)
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false