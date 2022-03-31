const arguments = process.argv.slice(2);

function findArea(r) {
   const p = 3.14;
   return p * Math.pow(r, 2);
}

console.log(findArea(arguments[0]));
