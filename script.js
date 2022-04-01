// var allChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I"
// ,"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","_","-","+",".",","];
// var allCharsLet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I"
// ,"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];
// var randNumOG = Math.floor(Math.random() * (allCharsLet.length - 1));
//
// document.getElementById("first").textContent=(breakIn(allCharsLet));
//
//
// function breakIn(characters){
//   var str = "";
//   for (var i = 0; i < Math.floor(Math.random() * (characters.length - 1)); i++) {
//     var randNum = Math.floor(Math.random() * (characters.length - 1));
//     str += characters[randNum];
//   }
//   return str;
// }
// //aids for pidgeon
// console.log(pideg(12));
//
//
// function pideg(nX) {
//   var n = 0;
//   n = nX;
//   var fed = 0;
//   var min = 0;
//   var pid = 0;
//   while (n >= pid) {
//     n -= pid;
//     min+=1;
//     if(n <= 0){
//       return fed;
//     }
//     if(min < n){
//       fed+=min;
//       n-=min;
//     }else{
//       fed+=n;
//       return fed;
//     }
//     pid+=min;
//   }
//   return fed;
// }

function tipCalc(total, percent){
  const calculated = (percent/100) * total;
  return calculated + total;
}

var apple = a => {
  let app = a;
  app = "apple";
  return app;
}

function nine(m) {
  const makeString = items => items.toString();
  var secondary = [];
  let store = [];
  let n = "";
  n+=m;
  for (var i = 0; i < n.length; i++) {
    store.push(Number(n.charAt(i)));
  }
  store.forEach(y => {
    if(y != 9){
      secondary.push(y+1);
    }else{
      secondary.push(10);
    }
  });
  const madeS = secondary.map(makeString);
  return Number(madeS.join(''));
}

function boxFit(xBox, yBox, xSmallBox, ySmallbox){
  var xDim = Math.floor(xBox/xSmallBox);
  var yDim = Math.floor(yBox/ySmallbox);
  return xDim * yDim;
}

function nine_bonus(n) {
  var digits = [];
  const newArr = [];
  var nums = 0;
  var mid = 1;
  var counter = 0;
  while (n > 0) {
    digits[digits.length] = n % 10;
    n = parseInt(n / 10);
  }
  console.log(newArr);
  digits.forEach(y => {
    if(y != 9){
      newArr.push(y+1);
    }else{
      newArr.push(10);s
    }
  });
  newArr.forEach(x => {
    if(x !== 10){
      nums += x*mid;
      mid*=10;
    }else{
      nums += x*mid;
      mid*=100;
    }
    console.log(nums);
  });
  return nums;
}

//balance xxxyyy pt 1
function balance(n){
  var x = 0;
  var y = 0;
  for (var i = 0; i < n.length; i++) {
    if(n.charAt(i) === 'x'){
      x++
    }else{
      y++
    }
  }
  if(n.length <= 1){
    return true;
  }else{
    if(x === y || x > 1 && y ===0 || y > 1 && x ===0){
      return true;
    }
  }
  return false;
}

// console.log(balanced_bonus("xxxyyyzzz")); //=> true
// console.log(balanced_bonus("abccbaabccba"));// => true
// console.log(balanced_bonus("xxxyyyzzzz")); //=> false
// console.log(balanced_bonus("abcdefghijklmnopqrstuvwxyz"));// => true
// console.log(balanced_bonus("pqq"));
// console.log(balanced_bonus("fdedfdeffeddefeeeefddf"));// => false
// console.log(balanced_bonus("www"));// => true
// console.log(balanced_bonus("x"));// => true
// console.log(balanced_bonus(""));// => true

//balance xxxyyyzzz pt 2 (AIDS)
function balanced_bonus(m) {
  const obj = {};
  const chars = [...m];
  chars.forEach((y) => {
    obj[y] = obj[y] + 1 || 1;
  });
  var compare = Object.values(obj);
  return compare.every((val , i , arr) => val === arr[0]);
}
// //attempt1
// function balanced_bonus(n){
//   var same = 0;
//   var arr = [];
//   if(n.length < 1){
//     return true;
//   }
//   for (var i = 0; i < n.length; i++) {
//     if(n.charAt(i) != n.charAt(i+1)){
//       same++;
//       // console.log(arr);
//     }
//   }
//   if(n.length%same === 0){
//     return true;
//   }
//   return false;
// }
//
// //attempt 2
// function balanced_bonus(n){
//   var same = 0;
//   var arr = [];
//   if(n.length < 1){
//     return true;
//   }
//   for (var i = 0; i < n.length; i++) {
//       if(!arr.includes(n.charAt(i))){
//         arr.push(n.charAt(i));
//       }
//   }
//   for (var i = 0; i < n.length; i++) {
//     if(arr.includes(n.charAt(i)) && (n.charAt(i) != n.charAt(i+1))){
//       same++;
//     }
//   }
//   if(n.length%same === 0){
//     return true;
//   }
//   return false;
// }


// if(splited%100 === 0){
//   let hunVal = splited/100;
//   storeArr.push({HundredBill: hunVal});
// }
// if(splited%50 === 0 && !(splited%100 === 0)){
//   let fifthVal = splited/50;
//   storeArr.push({FiftyBill: fifthVal});
// }
// if(splited%20 === 0 && !(splited%50 === 0) && !(splited%100 === 0)){
//   let twentyVal = splited/20;
//   storeArr.push({TwentyBill: twentyVal});
// }
// if(splited%10 === 0 && !(splited%20 === 0) && !(splited%50 === 0) && !(splited%100 === 0)){
//   let tenVal = splited/10;
//   storeArr.push({TenBill: tenVal});
// }

var solveTwo = (x) =>{
  var sumOfSquared = 0;
  var sumOfAllSquared = 0;
  for(var i = 1; i <= x; i++){
      sumOfSquared += Math.pow(i , 2);
      sumOfAllSquared += i;       
  }
  return Math.pow(sumOfAllSquared, 2) - sumOfSquared;
}

var recurringCycle = (x) => {
   curr = 0;
  var fin = 0;
  for(var i = 1; i <= x; i++){
    curr = 1/i; 
  }

  return curr;
}
