let score = "33"
console.log(typeof score);
console.log((typeof score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//"33" = 33
//"33abc" = NaN[not a number]
//true = 1; false = 0






//=========================================================================================================================
//1-  stack memory - primitive type use stack
//2- heap memory - non primitive used the heap memory

let myyoutubename  = "hiteshchaudharydotcom"
let anothername = myyoutubename
anothername = "chaiorcode"
console.log(anothername);