const name = "shravya"
const repocount = 40
console.log(name + repocount + "Value");


/*

console.log(`hello my name is ${name} and my repo count is ${repocount}`);
this method is far better than the above method for string interpalation

*/

//another method to write the string in JS
const gamename = new String('hiteshhc')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newgame = gamename.substring(0, 4)
console.log(newgame);

const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring);

const newstringOne = "     hitesh   "
console.log(newstringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '_'))



